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
                .state('app.notes', {
                    url: '/notes',
                    views: {
                        'content@app': {
                            templateUrl: 'app/main/note/archive-note.html',
                            controller: 'NotesController as vm'
                        }
                    }
                })
                .state('app.notes_new', {
                    url: '/novo',
                    views: {
                        'content@app': {
                            templateUrl: 'app/main/note/form-note.html',
                            controller: 'NotesFormController as vm'
                        }
                    }
                })
                .state('app.notes_edit', {
                    url: '/{url}',
                    views: {
                        'content@app': {
                            templateUrl: 'app/main/note/form-note.html',
                            controller: 'NotesFormController as vm'
                        }
                    }
                });

        $urlRouterProvider.otherwise('/login');

    }

})();
