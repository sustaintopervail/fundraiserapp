starter
	.factory(
		'utils',
		[
			'config',
			function(config) {
				// ********************************************
				var parse_querystring = function(query) {
					var parameters = {};

					if (!query) {
						query = location.search.substring(1, location.search.length);
					}
					if (query.length == 0) {
						return parameters;
					}

					var terms = query.split('&');

					$.each(terms, function(i, term) {
						var pair = term.split('=');
						var name = decodeURIComponent(pair[0]);
						var value = (pair.length == 2) ? decodeURIComponent(pair[1]) : '';

						parameters[name] = value;
					});

					return parameters;
				};

				// ********************************************
				// returns 'true' if a mobile device user-agent,
				// false
				// otherwise.
				var is_mobile_ua = function() {
					return /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent);
				};

				// ********************************************
				var is_ipad = function() {
					return (navigator.userAgent.match(/iPad/i) !== null);
				};

				// ********************************************
				var is_iphone = function() {
					return (navigator.userAgent.match(/iPhone/i) !== null);
				};

				// ********************************************
				var is_ipod = function() {
					return (navigator.userAgent.match(/iPod/i) !== null);
				};

				// ********************************************
				var is_ios = function() {
					return (is_ipad() || is_iphone() || is_ipod());
				};

				// ********************************************
				var is_android = function() {
					return (navigator.userAgent.match(/Android/i) !== null);
				};

				// ********************************************
				var get_android_version = function() {
					if (is_android()) {
						var match = navigator.userAgent.match(/Android\s([0-9\.]*)/);
						return parseFloat(match[1]);
					}
					return false;
				};

				// ********************************************
				var is_touch_device = function() {
					return !!('ontouchstart' in window) || !!('onmsgesturechange' in window);
					// works for most browsers || works on ie10
				};

				var is_valid_email = function(emailAddress) {
					var pattern = new RegExp(
						/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
					return pattern.test(emailAddress);

				};

				var is_number = function(str) {
					console.log(str);
					var rgx_is_number = new RegExp("^\\d*$");
					return rgx_is_number.test(str);
				}

				// ********************************************
				var debug = function() {
					var args = arguments; // allow comma separated
					// debug
					// messages

					// output messages to console
					if (!config.hide_debug) {
						// if (true) {
						$(args).each(function(i, msg) {
							if (typeof msg == "object") {
								console.log(JSON.stringify(msg));
							} else {
								console.log(msg);
							}
						});
					}
				};

				// sort object alphabatically
				var sortObject = function(obj) {
					var keys = $.map(obj, function(value, key) {
						return key;
					});
					keys.sort();
					var rv = {};
					for (var i = 0; i < keys.length; ++i) {
						rv[keys[i]] = obj[keys[i]];
					}
					return rv;
				};

				// sort object of objects by object key and value
				var sortObjectByKey = function(obj, ind, value) {
					var keys = $.map(obj, function(value, key) {
						return key;
					});
					var rv = [];
					for (var i = 0; i < keys.length; ++i) {
						if (obj[keys[i]][ind] == value) {
							rv.push(obj[keys[i]]);
						}
					}
					return rv;
				};

				var zero_append = function(number, length) {
					// Setup
					var result = number.toString();
					var pad = length - result.length;

					while (pad > 0) {
						result = '0' + result;
						pad--;
					}

					return result;
				}

				return {
					parse_querystring : parse_querystring,
					is_mobile_ua : is_mobile_ua,
					is_ipad : is_ipad,
					is_iphone : is_iphone,
					is_ipod : is_ipod,
					is_ios : is_ios,
					is_android : is_android,
					get_android_version : get_android_version,
					is_touch_device : is_touch_device,
					debug : debug,
					is_valid_email : is_valid_email,
					is_number : is_number,
					sortObject : sortObject,
					sortObjectByKey : sortObjectByKey,
					zero_append : zero_append
				};

			} ]);