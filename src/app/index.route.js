(function () {
    'use strict';

    angular
            .module('notepadDemo')
            .config(routerConfig);

    /** @ngInject */
    function routerConfig($stateProvider, $urlRouterProvider) {

        $stateProvider
                .state('app.home', {
                    url: '/',
                    views: {
                        'content@app': {
                            templateUrl: 'app/main/home/home.html',
                            controller: 'HomeController as vm'
                        }
                    }
                })
                .state('app.home2', {
                    url: '/home-2',
                    views: {
                        'content@app': {
                            templateUrl: 'app/main/home/home-2.html',
                            controller: 'HomeController as vm'
                        }
                    }
                });

        $urlRouterProvider.otherwise('/');

    }

})();
