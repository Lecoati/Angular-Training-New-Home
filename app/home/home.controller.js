(function() {
    'use strict';

    angular
        .module('newHome.home')
        .controller('HomeController', HomeController);

    function HomeController() {
        var vm = this;

        vm.title = 'New Home';
    }
})();

