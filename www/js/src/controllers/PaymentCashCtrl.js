starter.controller('PaymentCashCtrl', [
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

		// custom form validation handling
		var error_class = "ng-invalid";
		$scope.form_error = {};

		$scope.show_message = function(text) {

			$scope.modaldata = {
				title : "Cash Payment Failed!",
				body : text
			};
			popupTimer.error($scope);
		};
		$scope.$watch('formData.cell_no.value', function (newValue) {
			if (newValue && newValue.length > 10) {
				$scope.formData.cell_no.value = newValue.substring(0, 10);
			}
			// Must be checked against undefined or you get problems when removing text
			if (newValue != undefined) {
				$scope.commentLength = 10 - newValue.length;
			}
		});
		var validate_form = function() {
			var isValid = true;
			$scope.form_error = {
				first_name : "",
				last_name : "",
				code : "",
				cell_no : ""
			};
			if ($scope.formData.first_name == "" || $scope.formData.first_name == undefined) {
				$scope.show_message("FirstName is missing!");
				$scope.form_error.name = error_class;
				isValid = false;
			} else if ($scope.formData.last_name == "" || $scope.formData.last_name == undefined) {
				$scope.show_message("Last Name is missing!");
				$scope.form_error.last_name = error_class;
				isValid = false;
			} else if ($scope.formData.email == "" || utils.is_valid_email($scope.formData.email) == false) {
				$scope.show_message("Email is missing or invalid!");
				$scope.form_error.email = error_class;
				isValid = false;
			} else if ($scope.formData.cell_no == "" || $scope.formData.cell_no == undefined) {
				$scope.show_message("Phone number is missing!");
				$scope.form_error.cell_no = error_class;
				isValid = false;
			} else if ($scope.formData.cell_no.length < 10 || $scope.formData.cell_no.length > 11) {
				$scope.show_message("Phone number is not valid, it cannot be less or more than 10 digits long!");
				$scope.form_error.cell_no = error_class;
				isValid = false;
			} else if ($scope.formData.code == "" || $scope.formData.code == undefined) {
				$scope.show_message("code number is missing!");
				$scope.form_error.code = error_class;
				isValid = false;
			}

			return isValid;
		};

		var show_error = function(title) {
			$scope.modaldata = {
				title : title
			};
			popupTimer.error($scope);
		}
		$scope.submit_cash_btn = function() {
			if (validate_form() == false) {
				return false;
			}

			$scope.isDisabled = true;
			// Disable the submit button to prevent repeated clicks
			$rootScope.show_spinner();

			var _org = userDataService.getOrg();
			// Signup first
			userDataService.setUserSignupData($scope.signup);
			var userSignupData = {
				email : $scope.formData.email,
				first_name : $scope.formData.first_name,
				last_name : $scope.formData.last_name,
				username : $scope.formData.email,
				cell_no : $scope.formData.cell_no,
				password : $scope.formData.cell_no,
				new_password : $scope.formData.cell_no,
				password_confirm : $scope.formData.cell_no,
				org_id : _org.id,
				client_id : "1234567890",
				grant_type : "password",
				redirect_uri : ""
			};

			$rootScope.show_spinner();
			var _signupPromise = loginModel.doLogin(userSignupData);
			_signupPromise.then(function(JsonData) {
				utils.debug(JsonData);

				if (JsonData.success) {
					var data = JsonData.data;
					utils.debug(data);
					userDataService.setUserSignupData(data);
					localStorageService.set('access_token', JsonData.data.access_token);
					localStorageService.set('name', $scope.formData.first_name + ' ' + $scope.formData.last_name);
					localStorageService.set('email', $scope.formData.email );

					utils.debug("user_type: " + JsonData.data.user_type);
					if (JsonData.data.user_type == "Supporter") {
						var paymentData = {
							first_name : $scope.formData.first_name,
							last_name : $scope.formData.last_name,
							email : $scope.formData.email,
							cell_no : $scope.formData.cell_no,
							code : $scope.formData.code,
							org_id : $scope.org.id,
							access_token : localStorageService.get('access_token')
						};

						var _cash_payment_promise = cardModel.cash_payment(paymentData);

						_cash_payment_promise.then(function(json_data) {
							utils.debug(json_data);
							$rootScope.hide_spinner();
							if (json_data.success) {

								var discount_data = {};
								discount_data.code = json_data.code;
								discount_data.organization = json_data.organisation;
								userDataService.set_discount_data(discount_data);
								$rootScope.hide_spinner();
								$state.go('tabs.card');

							} else {
								$rootScope.hide_spinner();
								show_error(json_data.message);
							}
						}, function(error) {
							$rootScope.hide_spinner();
							show_error('An error occured while processing your transaction.');
							utils.debug(error);
						});
						return false;
					} else {
						$rootScope.hide_spinner();
						$state.go('tabs.home');
					}

				} else {
					$scope.modaldata = {
						title : "Signup Failed",
						body : JsonData.message
					};
					popupTimer.error($scope, function() {
						// $state.go('app.photo');
					});

				}
			}, function(status) {
				$rootScope.hide_spinner();
				utils.debug(status);
			});

		};

	} ]);
