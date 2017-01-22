(function () {
    'use strict';

    angular
            .module('notepadDemo')
            .controller('HomeController', HomeController);

    /** @ngInject */
    function HomeController($scope, $mdDialog) {

        /* jshint validthis:true */
        var vm = this;

        vm.title = '';

        activate();

        function activate() {
            
            vm.activity = [
                {
                    what: 'Brunch this weekend?',
                    who: 'Ali Conners',
                    when: '3:08PM',
                    notes: " I'll be in your neighborhood doing errands"
                },
                {
                    what: 'Summer BBQ',
                    who: 'to Alex, Scott, Jennifer',
                    when: '3:08PM',
                    notes: "Wish I could come out but I'm out of town this weekend"
                },
                {
                    what: 'Oui Oui',
                    who: 'Sandra Adams',
                    when: '3:08PM',
                    notes: "Do you have Paris recommendations? Have you ever been?"
                },
                {
                    what: 'Birthday Gift',
                    who: 'Trevor Hansen',
                    when: '3:08PM',
                    notes: "Have any ideas of what we should get Heidi for her birthday?"
                },
                {
                    what: 'Recipe to try',
                    who: 'Brian Holt',
                    when: '3:08PM',
                    notes: "We should eat this: Grapefruit, Squash, Corn, and Tomatillo tacos"
                }
            ];

            vm.alert = '';
        }

        $scope.showAdd = function (ev) {

            $mdDialog.show({
                controller: DialogController,
                template: '<md-dialog aria-label="Mango (Fruit)"> <md-content class="md-padding"> <form name="userForm"> <div layout layout-sm="column"> <md-input-container flex> <label>First Name</label> <input ng-model="user.firstName" placeholder="Placeholder text"> </md-input-container> <md-input-container flex> <label>Last Name</label> <input ng-model="theMax"> </md-input-container> </div> <md-input-container flex> <label>Address</label> <input ng-model="user.address"> </md-input-container> <div layout layout-sm="column"> <md-input-container flex> <label>City</label> <input ng-model="user.city"> </md-input-container> <md-input-container flex> <label>State</label> <input ng-model="user.state"> </md-input-container> <md-input-container flex> <label>Postal Code</label> <input ng-model="user.postalCode"> </md-input-container> </div> <md-input-container flex> <label>Biography</label> <textarea ng-model="user.biography" columns="1" md-maxlength="150"></textarea> </md-input-container> </form> </md-content> <div class="md-actions" layout="row"> <span flex></span> <md-button ng-click="answer(\'not useful\')"> Cancel </md-button> <md-button ng-click="answer(\'useful\')" class="md-primary"> Save </md-button> </div></md-dialog>',
                targetEvent: ev
            })
                    .then(function (answer) {
                        $scope.alert = 'You said the information was "' + answer + '".';
                    }, function () {
                        $scope.alert = 'You cancelled the dialog.';
                    });

        };
    }

    /** @ngInject */
    function DialogController($scope, $mdDialog) {
        $scope.hide = function () {
            $mdDialog.hide();
        };
        $scope.cancel = function () {
            $mdDialog.cancel();
        };
        $scope.answer = function (answer) {
            $mdDialog.hide(answer);
        };
    }
})();
