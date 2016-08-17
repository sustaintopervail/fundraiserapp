starter.controller('SupporterCardCtrl', [ '$scope', '$rootScope', '$state', '$stateParams', 'config', 'userDataService', 'utils',
	'localStorageService', 'loginModel','cardModel',
	function($scope, $rootScope, $state, $stateParams, config, userDataService, utils, localStorageService, loginModel, cardModel) {
		$scope.view_title = "Supporter";
		$scope.hide_back_btn = true;

		var _tokenPromise = cardModel.virtual_card(localStorageService.get('access_token'));
		utils.debug(_tokenPromise);
		_tokenPromise.then(function(JsonData) {
			$rootScope.hide_spinner();
			utils.debug(JsonData);
			if (JsonData.success) {

				utils.debug('payment verification done');
				var discount_data = {};
				discount_data.code = JsonData.code;
				discount_data.organization = JsonData.organisation;
				userDataService.set_discount_data(discount_data);
				localStorageService.set('name', JsonData.user.first_name + ' ' + JsonData.user.last_name);
				localStorageService.set('email',JsonData.user.email );
				//$state.go('tabs.card');
				$scope.org = userDataService.getOrg();
				$scope.discount_data = userDataService.get_discount_data();
				 // console.log($scope.discount_data);

				 if ($scope.discount_data.organization.organisation_logo == "") {
					 $scope.discount_data.organization.organisation_logo = "img/logo.png";
				 }
				$rootScope.hide_spinner();
				document.addEventListener("backbutton", function(){
					navigator.app.exitApp();
				}, false);


				//return;
			} else {
				utils.debug('payment errror');
				show_error(JsonData.message);
				$state.go('tabs.start');
				return;
			}
		}, function(status) {
			$rootScope.hide_spinner();
			utils.debug(status);
		});

		/*$scope.org = userDataService.getOrg();
		$scope.discount_data = userDataService.get_discount_data();
		// console.log($scope.discount_data);

		if ($scope.discount_data.organization.organisation_logo == "") {
			$scope.discount_data.organization.organisation_logo = "img/logo.png";
		}*/
		$rootScope.logout = function() {

			userDataService.clearUserSignupData();
			localStorageService.clearAll();
			// redirect to login
			$state.go('tabs.start');

		};

		$rootScope.login = function() {
			localStorageService.set('supporter_access_token', localStorageService.get('access_token'));
			$state.go('tabs.login');

		};

		$rootScope.home = function() {
			$state.go('tabs.supporter_home');
		};

		$rootScope.merchants = function() {
			$state.go('tabs.merchants');
		};

	} ]);
