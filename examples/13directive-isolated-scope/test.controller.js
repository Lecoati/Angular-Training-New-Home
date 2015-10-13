(function() {
    'use strict';

    angular
        .module('app')
        .controller('TestController', TestController);

    TestController.$inject = ['$scope'];

    function TestController($scope) {
        $scope.cristhian = {
            name: 'Cristhian Amaya',
            email: 'cristhian@lecoati.com',
            phone: '999999999'
        };

        $scope.foo = {
            name: 'Foo Bar',
            email: 'foo@bar.com',
            phone: '222222222'
        };
    }

})();

