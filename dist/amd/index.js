define(['exports', './authFilter', './baseConfig', './authService', './authorizeStep'], function (exports, _authFilter, _baseConfig, _authService, _authorizeStep) {
	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	exports.configure = configure;
	Object.defineProperty(exports, 'AuthService', {
		enumerable: true,
		get: function get() {
			return _authService.AuthService;
		}
	});
	Object.defineProperty(exports, 'AuthorizeStep', {
		enumerable: true,
		get: function get() {
			return _authorizeStep.AuthorizeStep;
		}
	});
	Object.defineProperty(exports, 'AuthFilterValueConverter', {
		enumerable: true,
		get: function get() {
			return _authFilter.AuthFilterValueConverter;
		}
	});

	function configure(aurelia, configCallback) {
		var version = 'versie 1.0.15';

		aurelia.globalizeResources('.authFilter');

		var baseConfig = aurelia.container.get(_baseConfig.BaseConfig);
		if (configCallback !== undefined && typeof configCallback === 'function') {
			configCallback(baseConfig);
		}
	}

	;
});