starter.controller('SupporterHomeCtrl', [ '$scope', '$rootScope', '$state', '$stateParams', 'config', 'userDataService', 'utils',
	'localStorageService', 'loginModel',
	function($scope, $rootScope, $state, $stateParams, config, userDataService, utils, localStorageService, loginModel) {
		$scope.view_title = "Supporter";
		$scope.hide_back_btn = false;
		$scope.org = userDataService.getOrg();

		$scope.purchase_click = function() {
			console.log('purchase it');
			$state.go('tabs.payment');
		};

		$scope.purchase_click = function() {
			console.log('purchase it');
			$state.go('tabs.payment');
		};

		$scope.register_supporter = function() {
			//console.log('login/signup it');
			$state.go('tabs.signup');
		};

		$scope.merchants_view = function() {
			$state.go('tabs.merchants');
		};

		$scope.cash_click = function() {
			console.log('cash clicked');
			$state.go('tabs.payment_cash');
		};

	} ]);
