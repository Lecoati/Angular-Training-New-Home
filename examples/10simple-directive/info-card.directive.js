(function() {
    'use strict';

    angular
        .module('app')
        .directive('infoCard', infoCard);

    function infoCard() {
        var directive = {
            templateUrl: 'infocard.html'
        };
        return directive;
    }

})();

