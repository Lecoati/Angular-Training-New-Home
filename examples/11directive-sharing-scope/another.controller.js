(function() {
    'use strict';

    angular
        .module('app')
        .controller('AnotherController', AnotherController);

    AnotherController.$inject = ['$scope'];

    function AnotherController($scope) {
        $scope.name = 'Foo Bar';
        $scope.email = 'foo@bar.com';
        $scope.phone = '222222222';
    }

})();

