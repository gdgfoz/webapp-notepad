(function () {
    'use strict';

    angular
            .module('notepadDemo.auth')
            .run(runModule);

    /** @ngInject */
    function runModule($rootScope, $log, $state, Auth)
    {

        $rootScope.$on("$stateChangeError", function (event, toState, toParams, fromState, fromParams, error) {
            // We can catch the error thrown when the $requireSignIn promise is rejected
            // and redirect the user back to the home page
            if (error === "AUTH_REQUIRED") {
                $state.go("login");
            }
        });
        
        $rootScope.$on('$stateChangeStart', function (event, toState) {
            if (toState['AUTH_REQUIRED'] === true && Auth.guest()) {
                event.preventDefault();
                $log.warn('Login required, to state: ' + toState.name);
                $state.go('login');
            }
        });

    }

})();
