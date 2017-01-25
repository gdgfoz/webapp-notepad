(function () {
    'use strict';

    angular
            .module('notepadDemo')
            .controller('NotesController', NotesController)
            .controller('NotesFormController', NotesFormController);

    /** @ngInject */
    function NotesController() {

        /* jshint validthis:true */
        var vm = this;

        //DATA


        activate();
        
        function activate()
        {
        }

    }

    /** @ngInject */
//    function DialogController($scope, $mdDialog) {
//        $scope.hide = function () {
//            $mdDialog.hide();
//        };
//        $scope.cancel = function () {
//            $mdDialog.cancel();
//        };
//        $scope.answer = function (answer) {
//            $mdDialog.hide(answer);
//        };
//    }
    /** @ngInject */
    function NotesFormController($scope) {

        /* jshint validthis:true */
        var vm = this;

        //DATA
        vm.title = '';
        vm.row = {
            'title': 'Notepad',
            'url': 'https://notepad-42e36.firebaseapp.com/share/mt2rc9eh'
        };

        activate();

        function activate() {

        }


    }
})();
