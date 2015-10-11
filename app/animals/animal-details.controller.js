(function() {
    'use strict';

    angular
        .module('newHome.animals')
        .controller('AnimalDetailsController', AnimalDetailsController);

    function AnimalDetailsController() {
        var vm = this;

        vm.title = 'Detalles de un animal';

    }

})();

