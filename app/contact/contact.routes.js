(function() {
    'use strict';

    angular
        .module('newHome.contact')
        .config(routeConfig);

    routeConfig.$inject = ['$routeProvider'];

    function routeConfig($routeProvider) {
        $routeProvider.when('/contactar', {
            templateUrl: 'app/contact/contact.html',
            controller: 'ContactController',
            controllerAs: 'contact',
            title: 'contact'
        });
    }

})();

