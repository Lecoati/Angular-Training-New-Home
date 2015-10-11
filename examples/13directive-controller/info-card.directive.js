(function() {
    'use strict';

    angular
        .module('app')
        .directive('infoCard', infoCard);

    function infoCard() {
        var directive = {
            templateUrl: 'infocard.html',
            controller: InfoCardController,
            controllerAs: 'info',
            bindToController: true,
            scope: {
                person: '='
            }
        };
        return directive;
    }

    InfoCardController.$inject = ['$window'];

    function InfoCardController($window) {
        var vm = this;

        vm.call = call;

        function call() {
            $window.alert('calling ' + vm.person.name);
        }
    }

})();

