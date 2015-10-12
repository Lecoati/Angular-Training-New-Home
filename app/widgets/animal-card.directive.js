(function() {
    'use strict';

    angular
        .module('newHome.widgets')
        .directive('nwhAnimalCard', nwhAnimalCard);

    function nwhAnimalCard() {
        var directive = {
            restrict: 'E',
            controller: AnimalCardController,
            controllerAs: 'card',
            templateUrl: 'app/widgets/animal-card.html',
            bindToController: {
                animal: '=',
                showContent: '='
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

