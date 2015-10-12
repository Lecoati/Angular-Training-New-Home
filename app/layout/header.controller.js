(function() {
    'use strict';

    angular
        .module('newHome.layout')
        .controller('HeaderController', HeaderController);

    HeaderController.$inject = ['$route'];

    /* @ngInject */
    function HeaderController($route) {
        var vm = this;

        vm.isRoute = isRoute;

        ////////////////

        function isRoute(routeTitle) {
            return $route.current.title === routeTitle;
        }
    }
})();

