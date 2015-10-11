(function() {
    'use strict';

    angular
        .module('app')
        .factory('animalsService', animalsService);

    animalsService.$inject = ['$http'];

    function animalsService($http) {
        var service = {
            getAll: getAll
        };

        return service;

        function getAll() {
            return $http.get('animals.json')
                .then(function(response) {
                    return response.data;
                });
        }
    }
})();

