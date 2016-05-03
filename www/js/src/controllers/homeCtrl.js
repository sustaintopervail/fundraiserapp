starter.controller('HomeCtrl', [
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

		$scope.get_code = function() {

			$rootScope.show_spinner();

			post_data = {
				'access_token' : localStorageService.get('access_token'),
				'organisation_id' : $scope.org.id
			};

			var _codePromise = fundModel.get_code(post_data);

			_codePromise.then(function(JsonData) {
				$rootScope.hide_spinner();
				utils.debug('JsonData recieved');
				utils.debug(JSON.stringify(JsonData));
				localStorageService.set('org_code', JsonData.data);
				$state.go("tabs.code");
			}, function(status) {
				$rootScope.hide_spinner();
			});

		};

		$rootScope.supporter_card = function() {
			if(localStorageService.get('supporter_access_token')){
				localStorageService.set('access_token', localStorageService.get('supporter_access_token'));
				$state.go('tabs.card');
			}else{
				alert('You do not have any activated virtual card');
			}
		};

	} ]);
