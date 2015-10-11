(function() {
    'use strict';

    angular
        .module('newHome.data')
        .factory('animalsService', animalsService);

    animalsService.$inject = ['$http', 'API_ENDPOINT'];

    function animalsService($http, API_ENDPOINT) {
        var service = {
            getAll: getAll,
            getById: getById,
            addLike: addLike
        };
        return service;

        function getAll() {
            return $http.get(API_ENDPOINT)
                .then(function(response) {
                    return response.data;
                });
        }

        function getById(id) {
            return $http.get(API_ENDPOINT + id)
                .then(function(response) {
                    return response.data;
                });
        }

        function addLike(animal) {
            return $http.put(API_ENDPOINT + animal.id + '/likes');
        }

    }
})();

