starter.controller('codeCtrl', [
	'$scope',
	'$rootScope',
	'$state',
	'$stateParams',
	'config',
	'utils',
	'fundModel',
	'popupTimer',
	'userDataService',
	'localStorageService',
	'popupTimer',
	function($scope, $rootScope, $state, $stateParams, config, utils, fundModel, loginModel, userDataService,
		localStorageService, popupTimer) {
		$scope.view_title = "Member Organization";
		$scope.data = {};
		$scope.hide_back_btn = false;
		$scope.data.code = false;

		$scope.org = userDataService.getOrg();
		$scope.org_code = localStorageService.get('org_code');

		$scope.error = true;
		if ($scope.org_code.success) {
			$scope.error = false;
		}

		var supporter = localStorageService.get('supporter_access_token');
		//alert(supporter);
		$scope.hide_logout = (supporter && supporter != '') ? false : true;
		//alert(hide_logout);
		$scope.hide_card = (supporter && supporter != '') ? true : false;

		$rootScope.supporter_card = function() {
			if(localStorageService.get('supporter_access_token')){
				localStorageService.set('access_token', localStorageService.get('supporter_access_token'));
				$state.go('tabs.card');
			}else{
				alert('You do not have any activated virtual card');
			}
		};

	}]);
