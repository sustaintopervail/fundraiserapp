starter.controller('WelcomeCtrl', [ '$scope', '$rootScope', '$state', '$stateParams', 'config', 'userDataService', 'utils',
	'localStorageService', 'loginModel',
	function($scope, $rootScope, $state, $stateParams, config, userDataService, utils, localStorageService, loginModel) {

		$scope.view_title = "";
		$scope.hide_back_btn = false;

		$scope.$on('$ionicView.enter', function() {
			$scope.org = userDataService.getOrg();
		});

		$scope.supporter_click = function() {
			$state.go('tabs.login');
		};
		$scope.member_click = function() {
			$state.go('tabs.login');
		};
		$scope.register_supporter = function() {
			$state.go('tabs.signup');
		};
		$scope.supporter_home_view = function() {
			$state.go('tabs.supporter_home');
		};

	} ]);
