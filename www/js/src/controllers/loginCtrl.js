starter.controller('LoginCtrl', [
	'$rootScope',
	'$scope',
	'$state',
	'$stateParams',
	'config',
	'utils',
	'loginModel',
	'userDataService',
	'localStorageService',
	'popupTimer',
	function($rootScope, $scope, $state, $stateParams, config, utils, loginModel, userDataService, localStorageService,
		popupTimer) {
		$scope.view_title = "Member Organization";
		$scope.hide_back_btn = false;

		var error_class = "ng-invalid ng-dirty";
		var _org = userDataService.getOrg();
		$scope.login = {
			// username : "imhassan66@gmail.com",
			// email: "imhassan66@gmail.com",
			// password : "test123",

			username : "",
			login_type : "seller",
			email : "",
			password : "",
			client_id : "1234567890",
			org_id : _org.id,
			grant_type : "password",
			redirect_uri : "test"
		};

		$scope.login_error = {
			email : "",
			password : ""
		};
		$rootScope.fix_enter_key();

		$scope.validateLoginForm = function() {
			var isValid = true;
			$scope.login_error = {
				email : "",
				password : ""
			};

			if ($scope.login.username == "" || utils.is_valid_email($scope.login.username) == false) {
				$scope.login_error.email = error_class;
				isValid = false;
			}
			if ($scope.login.password == "") {
				$scope.login_error.password = error_class;
				isValid = false;
			}

			return isValid;
		};

		$scope.doLogin = function() {
			utils.debug('doLogin');
			var isValid = $scope.validateLoginForm();
			if (isValid == false) {
				return false;
			}
			localStorageService.set('key_id', "");
			$rootScope.show_spinner();
			$scope.login.email = $scope.login.username;	
			$scope.login.email = $scope.login.username;
			var _loginPromise = loginModel.doLogin($scope.login);
			_loginPromise.then(function(JsonData) {
				$rootScope.hide_spinner();
				utils.debug('JsonData recieved');
				utils.debug(JSON.stringify(JsonData));
				if (JsonData.success) {
					localStorageService.set('access_token', JsonData.data.access_token);
					// set the user's data in service
					userDataService.setUserSignupData(JsonData.data);
					utils.debug("user_type: " + JsonData.data.user_type);
					if (JsonData.data.user_type == "Supporter") {
						$state.go('tabs.supporter_home');
					} else {
						$state.go('tabs.home');
					}

				} else {
					utils.debug('login failed: ' + JSON.stringify(JsonData));
					$scope.modaldata = {
						title : "Login failed",
						body : "We are unable to login with your credentials. Please try again."
					};
					popupTimer.error($scope);

				}

			}, function(status) {
				$rootScope.hide_spinner();
			});

		};

	} ]);
