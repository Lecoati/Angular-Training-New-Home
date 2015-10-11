(function() {

    angular
        .module('app')
        .controller('TestController', TestController);

    TestController.$inject = ['$window', 'animalsService'];

    function TestController($window, animalsService) {
        var vm = this;

        vm.animals = [];

        activate();

        function activate(){
            animalsService.getAll()
                .then(function(animals) {
                    vm.animals = animals;
                })
                .catch(function(error) {
                    $window.alert(error);
                })
                .finally(function() {
                    console.log('Carga finalizada');
                });
        }
    }

})();

