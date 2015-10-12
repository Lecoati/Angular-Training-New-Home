(function() {
    'use strict';

    angular
        .module('app')
        .filter('reverse', reverse);

    function reverse() {
        return reverseFilter;

        function reverseFilter(input) {
            var out = '';
            input = input || '';

            for (var i = 0; i < input.length; i++) {
                out = input.charAt(i) + out;
            }

            return out;
        }

    }

})();

