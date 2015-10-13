(function() {

    angular
        .module('app')
        .controller('TestController', TestController);


    function TestController() {
        var vm = this;

        vm.counter = 0;
        vm.increment = increment;

        function increment() {
            vm.counter += 1;
        }
    }

})();

