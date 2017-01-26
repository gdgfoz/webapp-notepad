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
        vm.archive = [];

        function activate()
        {
            loadResource();

        }

        function loadResource() {
            vm.archive = [
                {
                    'id': 1,
                    'title': 'Nota 1',
                    'url': 'kfjlskjfkdls',
                    'updated_at': '12/12/2016'
                },
                {
                    'id': 1,
                    'title': 'Nota 1',
                    'url': 'kfjlskjfkdls',
                    'updated_at': '12/12/2016'
                }
            ]
        }

    }

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
