(function() {
    'use strict';

    angular
        .module('newHome.data')
        .factory('animalsService', animalsService);

    animalsService.$inject = ['$http', 'API_ENDPOINT'];

    function animalsService($http, API_ENDPOINT) {
        var service = {
            getAll: getAll,
        };
        return service;

        function getAll() {
            return $http.get(API_ENDPOINT)
                .then(function(response) {
                    return response.data;
                });
        }

    }
})();

