starter.factory('userDataService', [ '$q', 'localStorageService', function($q, localStorageService) {
	var userSignupData = {};
	var getUserSignupData = function getUserSignupData() {
		return userSignupData;
	};

	var setUserSignupData = function(userData) {
		userSignupData = $.extend({}, userSignupData, userData);
		return userSignupData;
	};

	var isUserDataSet = function() {
		return ('email' in userSignupData);
	}

	var clearUserSignupData = function() {
		userSignupData = {};
		return userSignupData;
	};

	var setOrg = function(data) {
		localStorageService.set('org', JSON.stringify(data));
		console.log('userDataService');
		console.log(data);
		getOrg();
	};

	var getOrg = function() {
		var org = localStorageService.get('org');

		return org;
	};

	var set_discount_data = function(data) {
		//console.log("setting discount data");
		localStorageService.set('discount_data', JSON.stringify(data));
	};

	var get_discount_data = function() {
		discount_data = localStorageService.get('discount_data');
		//console.log(discount_data);
		return discount_data;
	};

	return {
		getUserSignupData : getUserSignupData,
		setUserSignupData : setUserSignupData,
		clearUserSignupData : clearUserSignupData,
		isUserDataSet : isUserDataSet,
		setOrg : setOrg,
		getOrg : getOrg,
		set_discount_data : set_discount_data,
		get_discount_data : get_discount_data
	};

} ]);