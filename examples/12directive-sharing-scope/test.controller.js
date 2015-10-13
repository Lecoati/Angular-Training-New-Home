(function() {
    'use strict';

    angular
        .module('app')
        .controller('TestController', TestController);

    TestController.$inject = ['$scope'];

    function TestController($scope) {
        $scope.name = 'Cristhian Amaya';
        $scope.email = 'cristhian@lecoati.com';
        $scope.phone = '999999999';
    }

})();

