(function() {
    'use strict';

    angular
        .module('app')
        .config(routeConfig);

    routeConfig.$inject = ['$routeProvider'];

    function routeConfig($routeProvider) {
        $routeProvider.otherwise({ redirectTo: '/' });
        $routeProvider.when('/', {
            templateUrl: 'home/home.html',
            controller: 'HomeController',
            controllerAs: 'home'
        });
    }

})();

