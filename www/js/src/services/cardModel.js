starter.factory('cardModel', [ '$http', '$q', '$rootScope', 'config', function($http, $q, $rootScope, config) {

	var saveToken = function(token, name) {
		$.tw.debug('token: ' + token);
		// send StripeToken back to server for creating persistant user

		var card_data = {
			braintree_nonce : token
		};
		var deffered = $q.defer();
		$http({
			method : 'POST',
			url : $.tw.global('apiUrl') + "consumer/card",
			data : card_data
		}).success(function(data, status, headers, config) {
			deffered.resolve(data);
		}).error(function(data, status, headers, config) {
			deffered.reject(status);
		});
		return deffered.promise;
	};

	var save_paypal = function(token, email) {
		$.tw.debug('token: ' + token);
		// send StripeToken back to server for creating persistant user

		var card_data = {
			braintree_nonce : token,
			paypal_email : email
		};
		var deffered = $q.defer();
		$http({
			method : 'POST',
			url : $.tw.global('apiUrl') + "consumer/add_paypal",
			data : card_data
		}).success(function(data, status, headers, config) {
			deffered.resolve(data);
		}).error(function(data, status, headers, config) {
			deffered.reject(status);
		});
		return deffered.promise;
	}

	var card_details = function() {
		$.tw.debug('card_details');
		var data = {
			ts : new Date().getTime()
		};

		var deffered = $q.defer();
		$http({
			method : 'GET',
			url : $.tw.global('apiUrl') + "consumer/card_details",
			data : {},
			params : {}
		}).success(function(data, status, headers, config) {
			deffered.resolve(data);
		}).error(function(data, status, headers, config) {
			deffered.reject(status);
		});
		return deffered.promise;
	};

	var client_token = function(access_token) {
		var deffered = $q.defer();
		$http({
			method : 'GET',
			url : config.apiUrl + "codeRest/restBrainTreeToken",
			data : {},
			params : {
				access_token : access_token
			}
		}).success(function(data, status, headers, config) {
			deffered.resolve(data);
		}).error(function(data, status, headers, config) {
			deffered.reject(status);
		});
		return deffered.promise;
	};
	var do_payment = function(data) {
		var deffered = $q.defer();
		$http({
			method : 'POST',
			url : config.apiUrl + "codeRest/restWePayCheckout",
			data : $.param(data)
		}).success(function(data, status, headers, config) {
			deffered.resolve(data);
		}).error(function(data, status, headers, config) {
			deffered.reject(status);
		});
		return deffered.promise;
	};

	var cash_payment = function(data) {
		var deffered = $q.defer();
		$http({
			method : 'POST',
			url : config.apiUrl + "codeRest/restCashCode",
			data : $.param(data)
		}).success(function(data, status, headers, config) {
			deffered.resolve(data);
		}).error(function(data, status, headers, config) {
			deffered.reject(status);
		});
		return deffered.promise;
	};

	var virtual_card = function(access_token) {
		var deffered = $q.defer();
		$http({
			method : 'GET',
			url : config.apiUrl + "codeRest/restVerify",
			data : {},
			params : {
				access_token : access_token
			}
		}).success(function(data, status, headers, config) {
			deffered.resolve(data);
		}).error(function(data, status, headers, config) {
			deffered.reject(status);
		});
		return deffered.promise;
	};

	return {
		saveToken : saveToken,
		save_paypal : save_paypal,
		card_details : card_details,
		client_token : client_token,
		do_payment : do_payment,
		cash_payment : cash_payment,
		virtual_card : virtual_card
	}
} ]);