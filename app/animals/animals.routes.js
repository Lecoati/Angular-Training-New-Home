(function() {
    'use strict';

    angular
        .module('newHome.animals')
        .config(routeConfig);

    routeConfig.$inject = ['$routeProvider'];

    function routeConfig($routeProvider) {
        $routeProvider
            .when('/animales/:id', {
                templateUrl: 'app/animals/animal-details.html',
                controller: 'AnimalDetailsController',
                controllerAs: 'animal'
            });
    }

})();

