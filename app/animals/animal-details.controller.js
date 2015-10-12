(function() {
    'use strict';

    angular
        .module('newHome.animals')
        .controller('AnimalDetailsController', AnimalDetailsController);

    AnimalDetailsController.$inject = ['$routeParams', 'animalsService'];

    function AnimalDetailsController($routeParams, animalsService) {
        var vm = this;

        vm.addComment = addComment;
        vm.animal = {};
        vm.isSaving = false;
        vm.comment = undefined;
        vm.showCardContent = false;

        activate();

        ////////////////

        function activate() {
            animalsService.getById($routeParams.id)
                .then(function(animal) {
                    vm.animal = animal;
                    return vm.animal;
                });
        }

        function addComment(form) {
            if (form.$invalid) return;

            vm.isSaving = true;
            animalsService.addComment(vm.animal.id, vm.comment)
                .then(function(comment) {
                    vm.isSaving = false;
                    vm.animal.comments.push(comment);
                    vm.animal.commentsCount += 1;
                    vm.comment = undefined;
                });
        }
    }
})();

