(function() {

    angular
        .module('app')
        .controller('TestController', TestController);

    TestController.$inject = ['animalsService'];

    function TestController(animalsService) {
        var vm = this;

        vm.animals = [];

        activate();

        function activate() {
            vm.animals = animalsService.getAll();
        }
    }

})();

