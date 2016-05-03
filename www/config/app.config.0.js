// Set up environment specific configs
var app_config = 'production'; // development staging production
switch (app_config) {
case 'development':
	window.app_config = {
		hide_debug : false,
		baseUrl : 'http://fundraisingapi.propertytaxcard.com/',
		secureUrl : 'https://fundraisingapi.propertytaxcard.com/',
		apiUrl : 'http://fundraisingapi.propertytaxcard.com/',
		sharedToken : '123'
	};
	break;

case 'staging':
	window.app_config = {
		hide_debug : false,
		baseUrl : 'http://fundraisingapi.propertytaxcard.com/',
		secureUrl : 'https://fundraisingapi.propertytaxcard.com/',
		apiUrl : 'http://fundraisingapi.propertytaxcard.com/',
		sharedToken : '123',
		wepay_endpoint : "stage", // stage or production
		wepay_client_id : "113700"

	};
	break;
case 'production':
	window.app_config = {
		hide_debug : false,
		baseUrl : 'http://fundraisingapi.propertytaxcard.com/',
		secureUrl : 'https://fundraisingapi.propertytaxcard.com/',
		apiUrl : 'http://fundraisingapi.propertytaxcard.com/',
		sharedToken : '123',
		wepay_endpoint : "stage", // stage or production
		wepay_client_id : "113700"
	};
	break;

default:
	window.app_config = {};
	$.tw.debug('Invalid environment specified for app initialization!');
	break;
}