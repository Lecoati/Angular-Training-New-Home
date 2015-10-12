(function() {
    'use strict';

    angular
        .module('newHome.animals')
        .config(routeConfig);

    routeConfig.$inject = ['$routeProvider', 'ANIMAL_TYPES'];

    function routeConfig($routeProvider, ANIMAL_TYPES) {
        $routeProvider
            .when('/perros', {
                templateUrl: 'app/animals/animals.html',
                controller: 'AnimalsController',
                controllerAs: 'vm',
                title: 'dogs',
                resolve: {
                    animalType: function() {
                        return ANIMAL_TYPES.Dogs
                    }
                }
            })
            .when('/perros/:id', {
                templateUrl: 'app/animals/animal-details.html',
                controller: 'AnimalDetailsController',
                controllerAs: 'vm',
                title: 'dogs',
                resolve: {
                    animalType: function() {
                        return ANIMAL_TYPES.Dogs
                    }
                }
            })
            .when('/gatos', {
                templateUrl: 'app/animals/animals.html',
                controller: 'AnimalsController',
                controllerAs: 'vm',
                title: 'cats',
                resolve: {
                    animalType: function() {
                        return ANIMAL_TYPES.Cats
                    }
                }
            })
            .when('/gatos/:id', {
                templateUrl: 'app/animals/animal-details.html',
                controller: 'AnimalDetailsController',
                controllerAs: 'vm',
                title: 'cats',
                resolve: {
                    animalType: function() {
                        return ANIMAL_TYPES.Cats
                    }
                }
            });
    }

})();

