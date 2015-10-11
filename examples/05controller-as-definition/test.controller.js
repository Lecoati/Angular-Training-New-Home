(function() {

    angular
        .module('app')
        .controller('TestController', TestController);


    function TestController() {
        var vm = this;
        vm.name = 'foo';
    }

})();

