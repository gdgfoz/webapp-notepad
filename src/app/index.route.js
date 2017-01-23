(function () {
    'use strict';

    angular
            .module('notepadDemo')
            .config(routerConfig);

    /** @ngInject */
    function routerConfig($stateProvider, $urlRouterProvider) {

        $stateProvider
                /*
                 * AUTH ROUTES
                 */
                .state('login', {
                    url: '/login',
                    views: {
                        'main@': {
                            templateUrl: 'app/main/auth/login.html',
                            controller: 'LoginController as vm'
                        }
                    }
                })
                .state('remind', {
                    url: '/recuperar-senha',
                    views: {
                        'main@': {
                            templateUrl: 'app/main/auth/remind.html',
                            controller: 'LoginController as vm'
                        }
                    }
                })
                .state('reset', {
                    url: '/criar-nova-senha',
                    views: {
                        'main@': {
                            templateUrl: 'app/main/auth/reset.html',
                            controller: 'LoginController as vm'
                        }
                    }
                })
                .state('singup', {
                    url: '/cadastro',
                    views: {
                        'main@': {
                            templateUrl: 'app/main/auth/singup.html',
                            controller: 'LoginController as vm'
                        }
                    }
                })
                /*
                 * MAIN ROUTES
                 */
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

        $urlRouterProvider.otherwise('/login');

    }

})();
