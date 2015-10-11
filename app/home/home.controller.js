(function() {
    'use strict';

    angular
        .module('newHome.home')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['animalsService'];

    function HomeController(animalsService) {
        var vm = this;

        vm.animals = [];
        vm.addLike = addLike;

        activate();

        function activate() {
            animalsService.getAll()
                .then(function(animals) {
                    vm.animals = animals;
                });
        }

        function addLike(animal) {
            animalsService.addLike(animal)
                .then(function() {
                    animal.likes += 1;
                });
        }

    }

})();

