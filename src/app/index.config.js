(function () {
    'use strict';

    angular
            .module('notepadDemo')
            .config(config);

    /** @ngInject */
    function config($logProvider, toastrConfig) {

        // Enable log
        $logProvider.debugEnabled(true);

        // Set options third-party lib
        toastrConfig.allowHtml = true;
        toastrConfig.timeOut = 3000;
        toastrConfig.positionClass = 'toast-top-right';
        toastrConfig.preventDuplicates = true;
        toastrConfig.progressBar = true;

        var config = {
            apiKey: 'AIzaSyCInl1PpTAaXU6gTw_ZfNHsBeYitgTh-5o',
            authDomain: 'notepad-42e36.firebaseapp.com',
            databaseURL: 'https://notepad-42e36.firebaseio.com',
            storageBucket: '<your-storage-bucket>'
        };
        
        firebase.initializeApp(config);
    }

})();
