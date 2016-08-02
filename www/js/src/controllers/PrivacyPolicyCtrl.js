starter.controller('PrivacyPolicyCtrl', [
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
		$scope.view_title = "Privacy Policy";
		$scope.data = {};
		$scope.hide_back_btn = false;
		$scope.data.code = false;

	} ]);
