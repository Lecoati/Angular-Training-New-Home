(function() {
    'use strict';

    angular
        .module('app')
        .factory('animalsService', animalsService);

    animalsService.$inject = ['$q'];

    function animalsService($q) {
        var service = {
            getAll: getAll
        };

        return service;

        function getAll() {
            var deferred = $q.defer();

            deferred.resolve(['Perro', 'Gato', 'Tortuga', 'Delfin', 'Caballo']);
            //deferred.reject('Error al intentar cargar los datos');

            return deferred.promise;
        }
    }
})();

