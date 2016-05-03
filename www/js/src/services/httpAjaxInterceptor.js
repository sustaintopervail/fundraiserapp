// register the interceptor as a service
starter.factory('httpAjaxInterceptor', [ '$q', '$rootScope', "$injector", '$timeout', 'localStorageService', 'utils',
	function($q, $rootScope, $injector, $timeout, localStorageService, utils) {
		return {
			// optional method
			'request' : function(config) {
				// console.log(config);
				if (localStorageService.get('access_token')) {
					utils.debug('setting token in header');
					//config.headers['access_token'] = localStorageService.get('access_token');
				}

				return config;
			},
			// optional method
			'requestError' : function(rejection) {
				// check internet connectivity
				// $rootScope.checkInternetConnectivity();
				// do something on error
				return $q.reject(rejection);
			},
			// optional method
			'response' : function(response) {
				// do something on success
				return response || $q.when(response);
			},
			// optional method
			'responseError' : function(rejection) {
				// check internet connectivity
				// $rootScope.checkInternetConnectivity();
				// do something on error
				// return $q.reject(rejection);
				// utils.debug('retrying....');
				// should retry
				// var $http = $injector.get('$http');
				// return $http(rejection.config);
				// $rootScope.noInternetTimerMsg();
				// $timeout(function() {
				// if (rejection.status != 404 && rejection.status != 401) {
				// return $http(rejection.config);
				// } else {
				return rejection;
				// }
				// }, 3000);

				// $rootScope.checkInternetConnectivity(rejection.config,
				// function(response) {
				// return response;
				// });

			}
		}
	} ]);
