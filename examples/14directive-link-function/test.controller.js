(function() {
    'use strict';

    angular
        .module('app')
        .controller('TestController', TestController);

    function TestController() {
        var vm = this;

        vm.cristhian = {
            name: 'Cristhian Amaya',
            email: 'cristhian@lecoati.com',
            phone: '999999999'
        };

        vm.foo = {
            name: 'Foo Bar',
            email: 'foo@bar.com',
            phone: '222222222'
        };
    }

})();

