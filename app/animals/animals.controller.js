(function() {
    'use strict';

    angular
        .module('newHome.animals')
        .controller('AnimalsController', AnimalsController);

    AnimalsController.$inject = ['animalsService', 'animalType'];

    function AnimalsController(animalsService, animalType) {
        var vm = this;

        vm.animals = [];
        vm.showCardsContent = true;

        activate();

        ////////////////

        function activate() {
            animalsService.getByType(animalType)
                .then(function(animals) {
                    vm.animals = animals;
                    return vm.animals;
                });
        }
    }
})();

