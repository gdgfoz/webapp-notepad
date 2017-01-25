(function () {
    'use strict';

    angular
            .module('notepadDemo.auth')
            .factory('Auth', AuthService);


    /** @ngInject */
    function AuthService($firebaseAuth, $log) {

        var authObj = $firebaseAuth();
        var user = false;

        var service = {
            'guest': guest,
            'check': check,
            'logout': logout,
            'user': user,
            'fromUser': setUser,
            'signInAnonymous': signInAnonymous,
            'signInFacebook': signInFacebook,
            '$firebase': authObj
        };

        activate();
        return service;
        ////////////////
        function activate()
        {

            var firebaseUser = authObj.$getAuth();

            if (firebaseUser) {
                console.log("Signed in as:", firebaseUser.uid);
            } else {
                console.log("Signed out");
            }

            authObj.$onAuthStateChanged(function (user) {
                $log.info('$onAuthStateChanged', user);
                setUser(user);
            });
        }

        function setUser(_user)
        {
            user = _user;
        }

        function check()
        {
            return (user) ? true : false;
        }

        function guest()
        {
            return !check();
        }

        function logout()
        {
            user = false;
            authObj.signOut();
        }

        function user()
        {
            return user;
        }

        function signInAnonymous()
        {
            return authObj.$signInAnonymously().then(function (firebaseUser) {
                setUser(firebaseUser.user);
                return firebaseUser.user;
            });
        }

        function signInFacebook()
        {
            return authObj.$signInWithPopup('facebook').then(function (firebaseUser) {
                setUser(firebaseUser.user);
                return firebaseUser.user;
            });
        }
    }
})();