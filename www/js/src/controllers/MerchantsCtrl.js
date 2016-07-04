starter.controller('MerchantsCtrl',
	[
		'$rootScope',
		'$scope',
		'$state',
		'$stateParams',
		'config',
		'utils',
		'fundModel',
		'userDataService',
		'localStorageService',
		'popupTimer',
		function($rootScope, $scope, $state, $stateParams, config, utils, fundModel, userDataService, localStorageService,
			popupTimer) {
			$scope.view_title = "Supporter";
			$scope.hide_back_btn = false;
			$scope.merchants = null;

			var _org = userDataService.getOrg();
			$scope.sms = (_org) ? true : false;
			var acess_token = localStorageService.get('access_token');
			$scope.is_vc = (acess_token && acess_token != '') ? true : false;

			$rootScope.show_spinner();
			var _orgPromise = fundModel.get_merchants(_org.id);

			_orgPromise.then(function(JsonData) {
				$rootScope.hide_spinner();
				utils.debug('JsonData recieved');
				utils.debug(JSON.stringify(JsonData));
				if (JsonData.data.success) {
					$scope.merchants = JsonData.data.merchant;
				}
			}, function(status) {
				$rootScope.hide_spinner();
			});

			$scope.org_select = function(org) {
				console.log(org);
				userDataService.setOrg(org);
				$state.go('tabs.welcome');
			};

			$scope.triggerCall = function(number){
				document.location.href = 'tel:' + number
			};

			$scope.restaurantOffer = function(number){
				$state.go('tabs.restaurant_payment');
			};

		} ]);
