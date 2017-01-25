(function () {
    'use strict';

    angular
            .module('notepadDemo.auth', [])
            .config(routerConfig);


    /** @ngInject */
    function routerConfig($stateProvider) {

        /*
         * AUTH ROUTES
         */
        $stateProvider
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
                });
    }

})();