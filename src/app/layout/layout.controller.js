(function () {
    'use strict';

    angular
            .module('gdg.layout')
            .controller('RightCtrl', RightCtrl)
            .controller('LeftCtrl', LeftCtrl)
            .controller('TemplateController', TemplateController)
            .controller('ListBottomSheetCtrl', ListBottomSheetController);

    /** @ngInject */
    function _TemplateController($scope, $timeout, $mdSidenav, $log)
    {
        $scope.toggleLeft = buildDelayedToggler('left');
        $scope.toggleRight = buildToggler('right');
        $scope.isOpenRight = function () {
            return $mdSidenav('right').isOpen();
        };

        /**
         * Supplies a function that will continue to operate until the
         * time is up.
         */
        function debounce(func, wait, context) {
            var timer;

            return function debounced() {
                var context = $scope,
                        args = Array.prototype.slice.call(arguments);
                $timeout.cancel(timer);
                timer = $timeout(function () {
                    timer = undefined;
                    func.apply(context, args);
                }, wait || 10);
            };
        }

        /**
         * Build handler to open/close a SideNav; when animation finishes
         * report completion in console
         */
        function buildDelayedToggler(navID) {
            return debounce(function () {
                // Component lookup should always be available since we are not using `ng-if`
                $mdSidenav(navID)
                        .toggle()
                        .then(function () {
                            $log.debug("toggle " + navID + " is done");
                        });
            }, 200);
        }

        function buildToggler(navID) {
            return function () {
                // Component lookup should always be available since we are not using `ng-if`
                $mdSidenav(navID)
                        .toggle()
                        .then(function () {
                            $log.debug("toggle " + navID + " is done");
                        });
            }
        }
    }

    /** @ngInject */
    function RightCtrl($scope, $timeout, $mdSidenav, $log)
    {
        $scope.close = function () {
            // Component lookup should always be available since we are not using `ng-if`
            $mdSidenav('right').close()
                    .then(function () {
                        $log.debug("close RIGHT is done");
                    });
        };
    }

    /** @ngInject */
    function LeftCtrl($scope, $timeout, $mdSidenav, $log)
    {
        $scope.close = function () {
            // Component lookup should always be available since we are not using `ng-if`
            $mdSidenav('left').close()
                    .then(function () {
                        $log.debug("close LEFT is done");
                    });

        };
    }

    /** @ngInject */
    function TemplateController($scope, $mdSidenav, $state) {

        var vm = this;
        
        //DATA
        vm.profile = {};
        vm.showSearch = false;
        var defaultProfile = {
            'name' : 'Usuário anônimo',
            'email' : null,
            'thumb_src' : 'assets/images/profile.jpg'
        };
        
        //MEHTODS
        vm.goTo = goTo;

        activate();

        function activate() {
            vm.profile = defaultProfile;
        }
        
        function goTo(url) {
            $state.go(url);
            $scope.toggleSidenav('left');
        }

        $scope.toggleSidenav = function (menuId) {
            $mdSidenav(menuId).toggle();
        };

        $scope.menu = [
            {
                link: '',
                title: 'Dashboard',
                icon: 'dashboard'
            },
            {
                link: '',
                title: 'Friends',
                icon: 'group'
            },
            {
                link: '',
                title: 'Messages',
                icon: 'message'
            }
        ];

        $scope.admin = [
            {
                link: '',
                title: 'Trash',
                icon: 'delete'
            },
            {
                link: 'showListBottomSheet($event)',
                title: 'Settings',
                icon: 'settings'
            }
        ];


    }

    /** @ngInject */
    function ListBottomSheetController($scope, $mdBottomSheet)
    {
        $scope.items = [
            {name: 'Share', icon: 'share'},
            {name: 'Upload', icon: 'upload'},
            {name: 'Copy', icon: 'copy'},
            {name: 'Print this page', icon: 'print'}
        ];

        $scope.listItemClick = function ($index) {
            var clickedItem = $scope.items[$index];
            $mdBottomSheet.hide(clickedItem);
        };
    }



})();