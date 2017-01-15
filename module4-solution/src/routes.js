(function() {
    'use strict';

    angular.module('MenuApp')
        .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function RoutesConfig($stateProvider, $urlRouterProvider) {

        // Redirect to home page if no other URL matches
        $urlRouterProvider.otherwise('/');

        // *** Set up UI states ***
        $stateProvider

        // Home page
            .state('home', {
            url: '/',
            templateUrl: 'templates/home.template.html'
        })

        // Categories list
        .state('categories', {
            url: '/categories',
            templateUrl: 'templates/categories.template.html',
            controller: 'CategoriesController as categoriesCtrl',
            resolve: {
                items: ['MenuDataService', function(MenuDataService) {
                    return MenuDataService.getAllCategories();
                }]
            }
        })

        .state('categories.items', {
            url: '/items/{itemId}',
            templateUrl: 'templates/items.template.html',
            controller: "ItemsController as itemsCtrl",
            resolve: {
                menuitems: ['$stateParams', 'MenuDataService', function($stateParams, MenuDataService) {
                    return MenuDataService.getItemsForCategory($stateParams.itemId);
                }]
            }
        });

    }

})();