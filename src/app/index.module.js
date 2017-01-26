(function () {
    'use strict';

    angular
            .module('notepadDemo', [
                'ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria',
                'ui.router', 'ngMaterial', 'toastr', 'gdg.layout', 'firebase',
                'notepadDemo.auth'
            ]);

})();
