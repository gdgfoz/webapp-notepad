/**
 * Template baseado no modelo
 * @ref https://codepen.io/kyleledbetter/pen/gbQOaV
 */

(function () {
    'use strict';

    angular
            .module('gdg.layout', [])
            .config(configureRouteTemplate);

    /** @ngInject */
    function configureRouteTemplate($stateProvider)
    {
        $stateProvider
                .state('app', {
                    abstract: true,
                    views: {
                        'main@': {
                            templateUrl: 'app/layout/template.html',
                            controller: 'TemplateController as vm'
                        },
                        'toolbar@app': {
                            templateUrl: 'app/layout/toolbar.html'
                            //controller: 'TemplateController as vm'
                        },
                        'content@app': {
                            //templateUrl: 'app/layout/toolbar.html',
                            //controller: 'TemplateController as vm'
                        }
                    }
                });
    }

})();