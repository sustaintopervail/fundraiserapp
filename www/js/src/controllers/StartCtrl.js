starter.controller('StartCtrl', [
	'$rootScope',
	'$scope',
	'$state',
	'$stateParams',
	'config',
	'utils',
	'fundModel',
	'loginModel',
	'userDataService',
	'localStorageService',
	'popupTimer',
	'$filter',
	function($rootScope, $scope, $state, $stateParams, config, utils, fundModel, loginModel, userDataService,
		localStorageService, popupTimer, $filter) {
		$scope.view_title = "My FundRaising";
		$scope.hide_back_btn = true;
		$scope.orgs = null;
		$scope.data = {};
		$scope.data.query = "";
		$rootScope.show_spinner();

		var _orgPromise = fundModel.get_organizations();

		_orgPromise.then(function(JsonData) {
			$rootScope.hide_spinner();
			utils.debug('JsonData recieved');
			utils.debug(JSON.stringify(JsonData));
			if (JsonData.data.success) {
				$scope.orgs = JsonData.data.profile;
				$scope.filteredOrgs = $filter('exactMatch')($scope.orgs, $scope.data.query);
			}
		}, function(status) {
			$rootScope.hide_spinner();
		});

		$scope.org_select = function(org) {
			console.log(org);
			console.log('Start: line#40');
			userDataService.setOrg(org);
			/*$state.go('tabs.welcome', {}, {reload: true});*/
			$state.transitionTo('tabs.welcome', $stateParams, {
				reload: true,
				inherit: false,
				notify: true
			});


		};

		$scope.$watch('data.query', function() {
			console.log($scope.data.query);
			if ($scope.data.query == "")
				return;
			$scope.filteredOrgs = $filter('exactMatch')($scope.orgs, $scope.data.query);
		});

	} ]);

starter.filter('exactMatch', function() {
	return function(words, pattern) {
		var result = [];
		words.forEach(function(word) {
			// console.log('hh');
			if (word.organisation_name.toLowerCase().substring(0, pattern.length) === pattern.toLowerCase()) {
				result.push(word);
			}
		});
		return result;
	}
});
