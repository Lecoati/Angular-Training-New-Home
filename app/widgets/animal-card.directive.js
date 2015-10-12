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

    function AnimalCardController() {
        var vm = this;
    }

})();

