starter.factory('fundModel', [ '$http', '$q', 'config', 'utils', 'localStorageService',
	function($http, $q, config, utils, localStorageService) {
		$http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";

		var get_organizations = function() {
			var deffered = $q.defer();
			$http({
				method : 'POST',
				url : config.apiUrl + "organisationRest/restList",
				data : {}
			}).success(function(data, status, headers, config) {
				deffered.resolve(data);
			}).error(function(data, status, headers, config) {
				deffered.reject(status);
			});
			return deffered.promise;
		};

		var get_merchants = function(organisation_id) {
			var deffered = $q.defer();
			$http({
				method : 'POST',
				url : config.apiUrl + "merchantRest/restList?organisation_id="+organisation_id,
				data : {}
			}).success(function(data, status, headers, config) {
				deffered.resolve(data);
			}).error(function(data, status, headers, config) {
				deffered.reject(status);
			});
			return deffered.promise;
		};

		var get_code = function(data) {
			var deffered = $q.defer();
			$http({
				method : 'POST',
				url : config.secureUrl + "codeRest/restAssign",
				data : $.param(data)

			}).success(function(data, status, headers, config) {
				deffered.resolve(data);
			}).error(function(data, status, headers, config) {
				deffered.reject(status);
			});
			return deffered.promise;
		};

		return {
			get_organizations : get_organizations,
			get_code : get_code,
			get_merchants : get_merchants
		};

	} ]);