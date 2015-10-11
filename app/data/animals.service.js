(function() {
    'use strict';

    angular
        .module('newHome.data')
        .factory('animalsService', animalsService);

    function animalsService() {
        var service = {
            getAll: getAll,
        };
        return service;

        function getAll() {
            return [{
                id: 1,
                photo: 'http://lorempixel.com/1024/600/cats/1',
                name: 'Baco',
                description: 'lorem ipsum dolor sit amet',
                likes: 0,
                commentsCount: 0
            },
            {
                id: 2,
                photo: 'http://lorempixel.com/1024/600/cats/2',
                name: 'Garfield',
                description: 'lorem ipsum dolor sit amet',
                likes: 4,
                commentsCount: 10
            },
            {
                id: 3,
                photo: 'http://lorempixel.com/1024/600/cats/3',
                name: 'Malibu',
                description: 'lorem ipsum dolor sit amet',
                likes: 9,
                commentsCount: 1
            }];
        }

    }
})();

