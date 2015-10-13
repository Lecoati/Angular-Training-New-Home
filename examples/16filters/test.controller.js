(function() {
    'use strict';

    angular
        .module('app')
        .controller('TestController', TestController);

    function TestController() {
        var vm = this;

        vm.title = 'foo bar';
        vm.price = 43;
    }

})();

