
;(function () {

    'use strict';

    angular.module('app', [
        'ui.router',
        'ngStorage',
        'ngResource',
        'ngMaterial'
    ])
        .config(config);

    // safe dependency injection
    // this prevents minification issues
    config.$inject = ['$stateProvider',
        '$urlRouterProvider', '$locationProvider'];

    function config($stateProvider,
                    $urlRouterProvider, $locationProvider) {

        // URL configuration
        $locationProvider
            .html5Mode(false).hashPrefix('');

        // Handles wrong and empty urls
        $urlRouterProvider.otherwise(function ($injector, $location) {
            if ($location.path().length > 1) return '/404';
            else return '/interventions';
        });

        $stateProvider
            .state('404', {
                url: '/404',
                template: '<h1>404 Not Found</h1>'
            })
            .state('interventions', {
                url: '/interventions',
                templateUrl: '/views/interventions/read_interventions.html',
                controller: 'InterventionController'
            })

    }

    /**
     * Run block
     * Runs first after launching
     */
    angular.module('app')
        .run(run);

    run.$inject = ['$rootScope', '$state'];

    function run($rootScope, $state) {
        // put here everything that you need to run on page reload
    }


})();
