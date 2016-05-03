starter.service('popupTimer', [ '$timeout', '$ionicModal', '$rootScope', function($timeout, $ionicModal, $rootScope) {
	var plugin = this;
        var default_time = 3000; 
	// *****************
	// * show timer popup
	// $scope.modaldata = modaldata should be set in $scope to render in
	// template
	// callback = callback to trigger on timeout
	// timeinMillisec = time in millisecond to hold popup display, Default is 3
	// sec

	plugin.show = function($scope, callback, timeinMillisec) {
		if (timeinMillisec == undefined || timeinMillisec == "") {
			timeinMillisec = default_time;
		}

		$ionicModal.fromTemplateUrl('templates/modals/modal.html', {
			scope : $scope,
			cache : false,
			animation : 'fade-in'
		}).then(function(modal) {

			modal.show();

			$timeout(function() {
				modal.hide();
				if (callback && typeof callback == 'function') {
					callback();
				}

			}, timeinMillisec);
		});

	};
        
        plugin.error = function($scope, callback, timeinMillisec) {
		if (timeinMillisec == undefined || timeinMillisec == "") {
			timeinMillisec = default_time;
		}

		$ionicModal.fromTemplateUrl('templates/modals/modal_error.html', {
			scope : $scope,
			cache : false,
			animation : 'fade-in'
		}).then(function(modal) {

			modal.show();

			$timeout(function() {
				modal.hide();
				if (callback && typeof callback == 'function') {
					callback();
				}

			}, timeinMillisec);
		});

	};

	plugin.show_modal_templ = function(template_name, $scope, callback, timeinMillisec) {
		if (timeinMillisec == undefined || timeinMillisec == "") {
			timeinMillisec = default_time;
		}

		$ionicModal.fromTemplateUrl(template_name, {
			scope : $scope,
			cache : false,
			animation : 'fade-in'
		}).then(function(modal) {

			modal.show();

			$timeout(function() {
				modal.hide();
				if (callback && typeof callback == 'function') {
					callback();
				}

			}, timeinMillisec);
		});

	};
} ]);