starter.controller('MainCtrl', [
	'$rootScope',
	'$scope',
	'$state',
	'$stateParams',
	'config',
	"utils",
	"loginModel",
	"localStorageService",
	'userDataService',
	'$ionicLoading',
	function($rootScope, $scope, $state, $stateParams, config, utils, loginModel, localStorageService, userDataService,
		$ionicLoading) {

		$rootScope.user_login = false;
		// check user's key and verify user is loggedin or not
		$rootScope.isUserLogin = function(callback) {
			var _isLogin = false;
			if (localStorageService.get('key_id') != undefined && localStorageService.get('key_id') != null
				&& localStorageService.get('key_id') != "") {

				if (userDataService.isUserDataSet()) {
					_isLogin = true;
					$rootScope.user_login = true;
					if (callback && typeof callback == 'function') {
						callback(_isLogin);
					}
				} else {
					var handshakePromose = loginModel.handshake();
					handshakePromose.then(function(JsonData) {
						if (JsonData.status) {
							userDataService.setUserSignupData(JsonData.data);
							utils.debug("handshake-data: ");
							utils.debug(JsonData.data);
							_isLogin = true;
							$rootScope.user_login = true;
							if (callback && typeof callback == 'function') {
								callback(_isLogin);
							}
						} else {
							callback(_isLogin);
						}
					}, function(status) {
						callback(_isLogin);
					});
				}
			} else {
				if (callback && typeof callback == 'function') {
					callback(_isLogin);
				}
			}
		};

		// logout user and redirect to login screen
		$rootScope.logout = function() {

			userDataService.clearUserSignupData();
			localStorageService.clearAll();
			// redirect to login
			$state.go('tabs.start');

		};

		$rootScope.supporter_card = function() {
			if(localStorageService.get('supporter_access_token')){
				localStorageService.set('access_token', localStorageService.get('supporter_access_token'));
				$state.go('tabs.card');
			}else{
				alert('You do not have any activated virtual card');
			}
		};
		$rootScope.go = function(state) {
			// redirect to login
			$state.go(state);
		};

		$rootScope.show_spinner = function() {
			$ionicLoading.show({
				template : '<ion-spinner icon="circles"></ion-spinner>'
			});
		};

		$rootScope.hide_spinner = function() {
			$ionicLoading.hide();
			$rootScope.laoding = false;
		};

		$rootScope.fix_enter_key = function() {
			utils.debug('1');

			$(document).keypress(function(e) {
				if (e.which == 13) {
					utils.debug('You pressed enter!');
					cordova.plugins.Keyboard.close();
				}
			});
		};

		$rootScope.internetMsgShown = false;
		$rootScope.checkInternetConnectivity = function() {
			if ($rootScope.internetMsgShown == false) {
				$rootScope.internetMsgShown = true;
				$rootScope.hide_spinner();

				$scope.modaldata = {
					title : "Network Error",
					body : "Sorry, you're not connected to the internet."
				};
				popupTimer.show($scope, function() {

				}, 5000);
			}
		};

		$rootScope.openUrl = function(urlString) {
			// urlString = encodeURI(urlString);
			if (utils.is_ios()) {
				window.open(encodeURI(urlString), '_system', 'location=yes');
				// $window.open(urlString, '_system');
				// window.open(urlString, '_blank', 'location=yes')
				// window.plugins.childBrowser.openExternal(urlString);
			} else if (utils.is_mobile_ua()) {
				navigator.app.loadUrl(urlString, {
					openExternal : true
				});
			} else {
				$window.open(urlString, '_system');
			}
		};

	} ]);
