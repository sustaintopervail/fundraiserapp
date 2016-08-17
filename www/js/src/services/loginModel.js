starter.factory('loginModel', [ '$http', '$q', 'config', 'utils', function($http, $q, config, utils) {

	$http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";

	var doLogin = function(data) {

		var deffered = $q.defer();
		$http({
			method : 'POST',
			url : config.secureUrl + "site/authorizeAjax",
			data : $.param(data)

		}).success(function(data, status, headers, config) {
			deffered.resolve(data);
		}).error(function(data, status, headers, config) {
			deffered.reject(status);
		});
		return deffered.promise;
	};

	var doSignup = function(data) {
		utils.debug(data);
		var deffered = $q.defer();
		$http({
			method : 'POST',
			url : config.secureUrl + "site/registerAjax",
			data : $.param(data)
		}).success(function(data, status, headers, config) {
			deffered.resolve(data);
		}).error(function(data, status, headers, config) {
			deffered.reject(status);
		});
		return deffered.promise;
	};

	var handshake = function() {
		var data = {
			ts : new Date().getTime().toString(),
			shared_token : config.sharedToken,
			device_id : device_id,
			platform : platform
		};

		var deffered = $q.defer();
		$http({
			method : 'POST',
			url : config.apiUrl + "handshake",
			data : data
		}).success(function(data, status, headers, config) {
			deffered.resolve(data);
		}).error(function(data, status, headers, config) {
			deffered.reject(status);
		});
		return deffered.promise;
	};

	var doLogout = function() {
		var deffered = $q.defer();
		$http({
			method : 'GET',
			url : config.secureUrl + "logout",
			data : {},
			params : {}
		}).success(function(data, status, headers, config) {
			deffered.resolve(data);
		}).error(function(data, status, headers, config) {
			deffered.reject(status);
		});
		return deffered.promise;
	};

	return {
		doLogin : doLogin,
		doLogout : doLogout,
		handshake : handshake,
		doSignup : doSignup
	};
} ]);