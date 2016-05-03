starter.controller('SignupCtrl', [
	"$rootScope",
	'$scope',
	'$state',
	'$stateParams',
	'config',
	'utils',
	'popupTimer',
	'userDataService',
	'loginModel',
	'localStorageService',
	function($rootScope, $scope, $state, $stateParams, config, utils, popupTimer, userDataService, loginModel,
		localStorageService) {
		$scope.view_title = "Supporter";
		$scope.signup = {
			first_name : "",
			last_name : "",
			email : "",
			cell_no : ""
		};
		var _org = userDataService.getOrg();
		// $scope.signup = {
		// first_name : "hassan",
		// last_name : "siddique",
		// email : "imhassan66@gmail.com",
		// cell_no : "123"
		// };

		$scope.signupSubmit = function() {
			if ($scope.validateSignupForm()) {

				userDataService.setUserSignupData($scope.signup);
				var userSignupData = {
					email : $scope.signup.email,
					first_name : $scope.signup.first_name,
					last_name : $scope.signup.last_name,
					username : $scope.signup.email,
					cell_no : $scope.signup.cell_no,
					password : $scope.signup.cell_no,
					new_password : $scope.signup.cell_no,
					password_confirm : $scope.signup.cell_no,
					org_id : _org.id,
					client_id : "1234567890",
					grant_type : "password",
					redirect_uri : ""
				};

				$rootScope.show_spinner();
				var _signupPromise = loginModel.doLogin(userSignupData);
				_signupPromise.then(function(JsonData) {
					utils.debug(JsonData);
					$rootScope.hide_spinner();
					if (JsonData.success) {
						var data = JsonData.data;
						utils.debug(data);
						userDataService.setUserSignupData(data);
						localStorageService.set('access_token', JsonData.data.access_token);
						localStorageService.set('name', $scope.signup.first_name + ' ' + $scope.signup.last_name);
						localStorageService.set('email', $scope.signup.email );

						utils.debug("user_type: " + JsonData.data.user_type);
						if (JsonData.data.user_type == "Supporter") {
							$state.go('tabs.payment');
						} else {
							$state.go('tabs.home');
						}

					} else {
						$scope.modaldata = {
							title : "Signup Failed",
							body : JsonData.message
						};
						popupTimer.error($scope, function() {
							// $state.go('app.photo');
						});

					}
				}, function(status) {
					$rootScope.hide_spinner();
					utils.debug(status);
				});
			}
		};

		// custom form validation handling
		var error_class = "ng-invalid";
		$scope.signup_error = {};

		$scope.show_message = function(text) {

			$scope.modaldata = {
				title : "Signup Failed!",
				body : text
			};
			popupTimer.error($scope);
		};

		$scope.validateSignupForm = function() {
			var isValid = true;
			$scope.signup_error = {
				first_name : "",
				email : "",
				last_name : "",
				cell_no : ""
			};

			console.log($scope.signup_error);
			var rgx_req_numeric = new RegExp("^(?=.*[0-9])");
			var rgx_req_symbols = new RegExp("^(?=.*[!@£$%^&*+={}\\[\\]<>|\/?~])");
			var display_name_isNumeric = rgx_req_numeric.test($scope.signup.name);
			var display_name_isSymbol = rgx_req_symbols.test($scope.signup.name);

			if ($scope.signup.first_name == "" || $scope.signup.first_name == undefined) {
				$scope.show_message("First Name is missing!");
				$scope.signup_error.first_name = error_class;
				isValid = false;
			} else if ($scope.signup.last_name == "" || $scope.signup.last_name == undefined) {
				$scope.show_message("Last Name is missing!");
				$scope.signup_error.last_name = error_class;
				isValid = false;
			} else if ($scope.signup.email == "" || utils.is_valid_email($scope.signup.email) == false) {
				$scope.show_message("Email is missing or invalid!");
				$scope.signup_error.email = error_class;
				isValid = false;
			} else if ($scope.signup.cell_no == "" || $scope.signup.cell_no == undefined) {
				$scope.show_message("Phone number is missing!");
				$scope.signup_error.cell_no = error_class;
				isValid = false;
			}

			return isValid;
		};

	} ]);
