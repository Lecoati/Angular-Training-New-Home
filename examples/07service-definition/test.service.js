(function() {
    'use strict';

    angular
        .module('app')
        .factory('animalsService', animalsService);

    function animalsService() {
        var service = {
            getAll: getAll
        };

        return service;

        function getAll() {
            return ['Perro', 'Gato', 'Tortuga', 'Delfin', 'Caballo'];
        }
    }
})();

