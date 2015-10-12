(function() {
    'use strict';

    var core = angular.module('newHome.core');

    var config = {
        version: '1.0.0'
    };

    core.constant('config', config);

    core.config(routeConfig);

    routeConfig.$inject = ['$routeProvider'];

    function routeConfig($routeProvider) {
        $routeProvider.otherwise({ redirectTo: '/' });
    }

})();

