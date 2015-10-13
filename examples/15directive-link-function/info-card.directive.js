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
            link: link,
            replace: true,
            scope: {
                person: '='
            }
        };
        return directive;

        function link(scope, element, attributes) {

            element.on('mouseenter', function() {
                element.css('background-color', 'orange');
            });

        }
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

