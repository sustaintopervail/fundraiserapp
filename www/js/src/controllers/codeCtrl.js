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



	} ]);
