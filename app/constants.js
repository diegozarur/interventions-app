;(function() {
	'use strict';

	/**
	 * Place to store API URL or any other constants
	 * Usage:
	 *
	 * Inject CONSTANTS service as a dependency and then use like this:
	 * CONSTANTS.API_URL
	 */
	angular.module('app')
		.constant('CONSTANTS', {
			'API_URL': 'http://localhost:8000/api/v1'
		});
})();
