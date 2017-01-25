(function () {
    'use strict';

    angular
            .module('notepadDemo')
            .controller('IndexController', indexController);

    /** @ngInject */
    function indexController($log, $state, Auth, currentAuth) {

        /* jshint validthis:true */
        var vm = this;

        vm.title = '';

        activate();

        function activate() {
            Auth.fromUser(currentAuth);
            $log.info("INDEX USER", currentAuth);
            $state.go('app.notes_new');
        }
    }
})();
