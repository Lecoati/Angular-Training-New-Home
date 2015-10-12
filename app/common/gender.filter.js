(function() {
    'use strict';

    angular
        .module('newHome.common')
        .filter('gender', gender);

    function gender() {
        return genderFilter;

        function genderFilter(gender) {
            return gender === 'M' ? 'Macho' : 'Hembra';
        };
    }

})();

