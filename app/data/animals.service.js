(function() {
    'use strict';

    angular
        .module('newHome.data')
        .factory('animalsService', animalsService);

    animalsService.$inject = ['$http', 'API_ENDPOINT', 'ANIMAL_TYPES'];

    function animalsService($http, API_ENDPOINT, ANIMAL_TYPES) {
        var service = {
            getAll: getAll,
            getByType: getByType,
            getById: getById,
            addComment: addComment,
            addLike: addLike
        };
        return service;

        function getAll() {
            return $http.get(API_ENDPOINT)
                .then(getAnimalsData);
        }

        function getByType(typeId) {
            return $http.get(API_ENDPOINT, {
                params: {
                    typeId: typeId
                }
            })
            .then(getAnimalsData);
        }

        function getById(id) {
            return $http.get(API_ENDPOINT + id)
                .then(function(response) {
                    extendAnimalData(response.data);
                    return response.data;
                });
        }

        function addLike(animal) {
            return $http.put(API_ENDPOINT + animal.id + '/likes');
        }

        function addComment(id, comment) {
            return $http.post(API_ENDPOINT + id + '/comments', comment)
                .then(function(response) {
                    return response.data;
                });
        }

        function getAnimalsData(response) {
            response.data.forEach(function(animal) {
                extendAnimalData(animal);
            });

            return response.data;
        }

        function extendAnimalData(animal) {
            animal.typeUrl = animal.animalTypeId === ANIMAL_TYPES.Dogs
                ? 'perros'
                : 'gatos';
            animal.isMale = animal.gender === 'M';
            animal.isFemale = animal.gender === 'F';
        }
    }
})();

