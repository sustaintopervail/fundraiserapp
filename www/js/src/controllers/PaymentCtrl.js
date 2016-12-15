starter.controller('PaymentCtrl', [
	'$scope',
	'$rootScope',
	'$state',
	'$stateParams',
	'config',
	'userDataService',
	'utils',
	'localStorageService',
	'loginModel',
	'popupTimer',
	'cardModel',
	function($scope, $rootScope, $state, $stateParams, config, userDataService, utils, localStorageService, loginModel,
		popupTimer, cardModel) {
		$scope.view_title = "Supporter";
		$scope.hide_back_btn = false;
		$scope.org = userDataService.getOrg();
		$scope.formData = {};
		$scope.formData = {
			name : "h a",
			number : "4111 1111 1111",
			//expiry : "12/16",
			email : "imhassan66@gmail.com",
			zipcode : '21022',
			cvv : "123"/*,
			code : "1457185923"*/
		};

		$scope.formData = {
			name : "",
			number : "",
			//expiry : "",
			email : "",
			zipcode : '',
			cvv : "",
			/*code : ""*/
		};

		var show_error = function(title) {
			$scope.modaldata = {
				title : title
			};
			popupTimer.error($scope);
		}
		$scope.submitCCForm = function() {

			// check if name is empty
			/*if ($scope.formData.name == '' || $scope.formData.name == undefined) {
				show_error('Please add your full name.');
				return false;
			}*/
			// check if number is empty
			if ($scope.formData.number == '' || $scope.formData.number == undefined) {
				show_error('Please add card number.');
				return false;
			}

			/*if ($scope.formData.email == '' || $scope.formData.email == undefined) {
				show_error('Please add your email address.');
				return false;
			}*/

			// check if expiry is empty
			if ($scope.formData.number.length > 16 || $scope.formData.number.length < 16) {
				show_error('Please add a valid credit card number.');
				return false;
			}

			if ($scope.formData.expiry == '' || $scope.formData.expiry == undefined) {
				show_error('Please add expiray of your card.');
				return false;
			}
			// check if cvc is empty
			if ($scope.formData.cvv == '' || $scope.formData.cvv == undefined) {
				show_error('Please add CVV code.');
				return false;
			}

			if ($scope.formData.cvv.length < 3) {
				show_error('Please add a valid CVV code.');
				return false;
			}

			if ($scope.formData.zipcode == '' || $scope.formData.zipcode == undefined) {
				show_error('Please add ZIP code.');
				return false;
			}

			if ($scope.formData.zipcode.length < 5 || $scope.formData.zipcode.length > 5) {
				show_error('Please add a valid ZIP code.');
				return false;
			}

			$rootScope.show_spinner();
			$scope.isDisabled = true;
			get_wepay_credit_card(function(data) {
				//$rootScope.hide_spinner();
				console.log(data);
				if (data.error) {
					$rootScope.hide_spinner();
					show_error(data.error_description);
				} else {
					$scope.formData.credit_card_id = data.credit_card_id;
					make_payment();
				}
			});
		};

		var get_wepay_credit_card = function(cb) {

			console.log($scope.formData);
			udata = $scope.formData;
			expiry_split = $scope.formData.expiry.split("/");
			utils.debug('expiry...' + $scope.formData.expiry + "month: " + expiry_split[0] + " year: " + expiry_split[1]);
			WePay.set_endpoint(config.wepay_endpoint);
			// change to "production" when live
			console.log(WePay);
			response = WePay.credit_card.create({
				"client_id" : config.wepay_client_id,
				"user_name" : localStorageService.get('name'),
				/*"user_name" : udata.name,*/
				/*"email" : udata.email,*/
				"email" : localStorageService.get('email'),
				"cc_number" : udata.number,
				"cvv" : udata.cvv,
				"expiration_month" : parseInt(expiry_split[0]),
				"expiration_year" : parseInt(expiry_split[1]),
				"address" : {
					"postal_code" : udata.zipcode
				}
			}, cb);
		}
		var make_payment = function() {
			utils.debug("make_payment....");
			var paymentData = {
				name : localStorageService.get('name'),
				/*name : $scope.formData.name,*/
				/*code : $scope.formData.code,*/
				/*email : $scope.formData.email,*/
				email : localStorageService.get('email'),
				access_token : localStorageService.get('access_token'),
				credit_card_id : $scope.formData.credit_card_id,
				amount : $scope.org.cost,
				org_id : $scope.org.id
			};

			var _tokenPromise = cardModel.do_payment(paymentData);
			utils.debug(_tokenPromise);
			_tokenPromise.then(function(JsonData) {

				utils.debug(JsonData);
				if (JsonData.success) {

					utils.debug('payment done');
					var discount_data = {};
					discount_data.code = JsonData.code;
					discount_data.organization = JsonData.organisation;
					userDataService.set_discount_data(discount_data);
					$rootScope.hide_spinner();
					$state.go('tabs.card');
				} else {
					$rootScope.hide_spinner();
					utils.debug('payment errror');
					show_error(JsonData.message);
				}
			}, function(status) {
				$rootScope.hide_spinner();
				utils.debug(status);
			});
		};

	} ]);
