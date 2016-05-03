starter.controller('SplashCtrl', [ '$scope', '$rootScope', '$state', '$stateParams', '$timeout', 'config', 'userDataService', 'localStorageService','cardModel','utils','popupTimer',
	function($scope, $rootScope, $state, $stateParams, $timeout, config, userDataService, localStorageService,cardModel,utils,popupTimer) {

		$scope.view_title = "Splash";
		$rootScope.show_spinner();

        var show_error = function(title) {
            $scope.modaldata = {
                title : title
            };
            popupTimer.error($scope);
        }

		if(localStorageService.get('access_token')){
			var _tokenPromise = cardModel.virtual_card(localStorageService.get('access_token'));
			utils.debug(_tokenPromise);
			_tokenPromise.then(function(JsonData) {
				$rootScope.hide_spinner();
				utils.debug(JsonData);
				if (JsonData.success) {

					utils.debug('payment verification done');
					var discount_data = {};
					discount_data.code = JsonData.code;
					discount_data.organization = JsonData.organisation;
					userDataService.set_discount_data(discount_data);
					$state.go('tabs.card');
					$rootScope.hide_spinner();
					return;
				} else {
					utils.debug('payment errror');
					show_error(JsonData.message);
                    $state.go('tabs.start');
                    return;
				}
			}, function(status) {
				$rootScope.hide_spinner();
				utils.debug(status);
			});

		}else{
            var redirectUser = function() {
                $rootScope.isUserLogin(function(isUserLogin) {
                    $rootScope.hide_spinner();
                    if (isUserLogin) {
                        console.log('user login');
                        config.key = localStorageService.get('user_key');
                        config.key_id = localStorageService.get('key_id');
                        $state.go('app.home');
                    } else {
                        $state.go('tabs.start');
                    }
                });
            };
            // $timeout(function() {
            redirectUser();
            // }, 3000);
        }


	} ]);