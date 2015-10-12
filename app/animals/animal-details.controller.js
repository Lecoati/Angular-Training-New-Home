(function() {
    'use strict';

    angular
        .module('newHome.animals')
        .controller('AnimalDetailsController', AnimalDetailsController);

    AnimalDetailsController.$inject = ['$routeParams', 'animalsService'];

    function AnimalDetailsController($routeParams, animalsService) {
        var vm = this;

        vm.details = {};
        vm.showCardContent = false;

        activate();

        function activate() {
            animalsService.getById($routeParams.id)
                .then(function(animal) {
                    vm.details = animal;
                    return vm.animal;
                });
        }

    }

})();

