// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
var starter = angular.module('starter', [ 'ionic', 'LocalStorageModule', 'ngCordova', 'templatescache', 'angularPayments' ]);

// set configurations
starter.constant('config', window.app_config);

starter.config([ '$httpProvider', '$ionicConfigProvider', function($httpProvider, $ionicConfigProvider) {

	// interceptor for ajax http request
	$httpProvider.interceptors.push('httpAjaxInterceptor');

	$ionicConfigProvider.backButton.previousTitleText(false).text('');
} ]);

starter.run(function($ionicPlatform) {
	$ionicPlatform.ready(function() {
		// Hide the accessory bar by default (remove this to show the accessory
		// bar above the keyboard
		// for form inputs)
		if (window.cordova && window.cordova.plugins.Keyboard) {
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
		}
		if (window.StatusBar) {
			// org.apache.cordova.statusbar required
			StatusBar.styleDefault();
		}
		ionic.Platform.fullScreen();
		ionic.Platform.isFullScreen = true;
	});
})

.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider

	.state('tabs', {
		url : "/tab",
		abstract : true,
		templateUrl : "tabs.html"
	})

	.state('tabs.splash', {
		url : "/splash",
		views : {
			'public-view' : {
				templateUrl : "splash.html",
				controller : 'SplashCtrl'
			}
		}
	})

	.state('tabs.welcome', {
		url : "/welcome",
		views : {
			'public-view' : {
				templateUrl : "welcome.html",
				controller : 'WelcomeCtrl'
			}
		}
	})

	.state('tabs.start', {
		url : "/start",
		views : {
			'public-view' : {
				templateUrl : "start.html",
				controller : 'StartCtrl'
			}
		}
	})

	.state('tabs.login', {
		url : "/login",
		views : {
			'public-view' : {
				templateUrl : "login.html",
				controller : 'LoginCtrl'
			}
		}
	})

	.state('tabs.signup', {
		url : "/signup",
		views : {
			'public-view' : {
				templateUrl : "signup.html",
				controller : 'SignupCtrl'
			}
		}
	})

	.state('app', {
		url : "/app",
		cache : false,
		templateUrl : "menu.html",
		controller : 'AppCtrl'
	})

	.state('tabs.home', {
		url : "/home",
		cache : false,
		views : {
			'public-view' : {
				templateUrl : "home.html",
				controller : 'HomeCtrl'
			}
		}
	})

	.state('tabs.code', {
		url : "/code",
		cache : false,
		views : {
			'public-view' : {
				templateUrl : "code.html",
				controller : 'codeCtrl'
			}
		}
	})

	.state('supporter', {
		url : "/supporter",
		cache : false,
		templateUrl : "menu_supporter.html",
		controller : 'AppCtrl'
	})

	.state('tabs.supporter_home', {
		url : "/supporter_home",
		views : {
			'public-view' : {
				templateUrl : "supporter_home.html",
				controller : 'SupporterHomeCtrl'
			}
		}
	})

	.state('tabs.merchants', {
		url : "/merchants",
		views : {
			'public-view' : {
				templateUrl : "merchants.html",
				controller : 'MerchantsCtrl'
			}
		}
	})

	.state('tabs.payment', {
		url : "/payment",
		views : {
			'public-view' : {
				templateUrl : "payment.html",
				controller : 'PaymentCtrl'
			}
		}
	})

	.state('tabs.restaurant_payment', {
		url : "/restaurant_payment",
		views : {
			'public-view' : {
				templateUrl : "restaurant_payment.html",
				controller : 'RestaurantPaymentCtrl'
			}
		}
	})

	.state('tabs.privacy_policy', {
		url : "/privacy_policy",
		views : {
			'public-view' : {
				templateUrl : "privacy_policy.html",
				controller : 'PrivacyPolicyCtrl'
			}
		}
	})

	.state('tabs.card', {
		url : "/card",
		views : {
			'public-view' : {
				templateUrl : "supporter_card.html",
				controller : 'SupporterCardCtrl'
			}
		}
	})

	.state('tabs.payment_cash', {
		url : "/payment_cash",
		views : {
			'public-view' : {
				templateUrl : "payment_cash.html",
				controller : 'PaymentCashCtrl'
			}
		}
	})

	;
	// if none of the above states are matched, use this as the fallback
	$urlRouterProvider.otherwise('tab/splash');
});

angular.module('myFastClick', []).run(function() {
	FastClick.attach(document.body);
});
