(function() {
    'use strict';

    angular
        .module('newHome.home')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['animalsService'];

    function HomeController(animalsService) {
        var vm = this;

        vm.animals = [];

        activate();

        function activate() {
            animalsService.getAll()
                .then(function(animals) {
                    vm.animals = animals;
                });
        }
    }

})();

