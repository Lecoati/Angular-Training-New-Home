(function() {
    'use strict';

    angular
        .module('newHome.home')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['animalsService', '_'];

    function HomeController(animalsService, _) {
        var vm = this;

        vm.animals = [];
        vm.showCardsContent = true;

        activate();

        ////////////////

        function activate() {
            animalsService.getAll()
                .then(function(animals) {
                    vm.animals = _.shuffle(animals);
                    return vm.animals;
                });
        }

    }
})();

