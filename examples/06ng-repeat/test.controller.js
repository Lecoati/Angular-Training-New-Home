(function() {

    angular
        .module('app')
        .controller('TestController', TestController);


    function TestController() {
        var vm = this;
        vm.animals = ['Perro', 'Gato', 'Tortuga', 'Delfin', 'Caballo'];
    }

})();

