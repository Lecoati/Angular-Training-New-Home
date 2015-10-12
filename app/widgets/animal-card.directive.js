(function() {
    'use strict';

    angular
        .module('newHome.widgets')
        .directive('nwhAnimalCard', nwhAnimalCard);

    function nwhAnimalCard() {
        var directive = {
            replace: true,
            templateUrl: 'app/widgets/animal-card.html',
            controller: AnimalCardController,
            controllerAs: 'card',
            bindToController: {
                animal: '='
            },
            scope: {}
        };
        return directive;
    }

    AnimalCardController.$inject = ['animalsService'];

    function AnimalCardController(animalsService) {
        var vm = this;

        vm.addLike = addLike;

        function addLike() {
            animalsService.addLike(vm.animal)
                .then(function() {
                    vm.animal.likes += 1;
                });
        }

    }

})();

