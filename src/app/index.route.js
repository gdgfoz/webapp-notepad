(function () {
    'use strict';

    angular
            .module('notepadDemo')
            .config(routerConfig);

    /** @ngInject */
    function routerConfig($locationProvider, $stateProvider, $urlRouterProvider) {

        // This is in your app module config.
        $locationProvider.html5Mode(true);

        /*
         * MAIN ROUTES
         */
        $stateProvider
                .state('app.home', {
                    url: '/home',
                    views: {
                        'content@app': {
                            controller: 'IndexController as vm'
                        }
                    },
                    resolve: {
                        // controller will not be loaded until $requireSignIn resolves
                        // Auth refers to our $firebaseAuth wrapper in the factory below
                        "currentAuth": ["Auth", function (Auth) {
                                // $requireSignIn returns a promise so the resolve waits for it to complete
                                // If the promise is rejected, it will throw a $stateChangeError (see above)
                                return Auth.$firebase.$requireSignIn();
                            }]
                    }
                })
                .state('app.notes', {
                    url: '/notes',
                    views: {
                        'content@app': {
                            templateUrl: 'app/main/note/archive-note.html',
                            controller: 'NotesController as vm'
                        }
                    },
                    AUTH_REQUIRED: true
                })
                .state('app.notes_new', {
                    url: '/novo',
                    views: {
                        'content@app': {
                            templateUrl: 'app/main/note/form-note.html',
                            controller: 'NotesFormController as vm'
                        }
                    },
                    AUTH_REQUIRED: true
                })
                .state('app.notes_edit', {
                    url: '/{url}',
                    views: {
                        'content@app': {
                            templateUrl: 'app/main/note/form-note.html',
                            controller: 'NotesFormController as vm'
                        }
                    },
                    AUTH_REQUIRED: true
                });

        $urlRouterProvider.otherwise('/home');

    }

})();
