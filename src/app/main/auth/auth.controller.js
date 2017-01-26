(function () {
    'use strict';

    angular
            .module('notepadDemo.auth')
            .controller('LoginController', LoginController);


    /** @ngInject */
    function LoginController($state, Auth) {

        var vm = this;

        // Data
        vm.user = {};

        // Methods
        vm.authFacebook = authFacebook;
        vm.authAnonymous = authAnonymous;

        //--------------------- Functions
        function authSuccess()
        {
            $state.go('app.notes_new');
        }

        function authAnonymous()
        {
            Auth.signInAnonymous()
                    .then(authSuccess)
                    .catch(function (error) {
                        console.log("Authentication failed:", error);
                    });
        }

        function authFacebook()
        {
            Auth.signInFacebook()
                    .then(authSuccess)
                    .catch(function (error) {
                        console.log("Authentication failed:", error);
                    });
        }

    }

})();
