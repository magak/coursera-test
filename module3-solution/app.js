(function() {
    'use strict';

    angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService)
        .directive('foundItems', FoundItemsDirective)
        .constant('ApiBasePath', "http://davids-restaurant.herokuapp.com");

    function FoundItemsDirective() {
        var ddo = {
            templateUrl: 'foundItems.html',
            scope: {
                items: '<',
                onRemove: '&'
            },
            controller: FoundItemsDirectiveController,
            controllerAs: 'foundItems',
            bindToController: true
        };

        return ddo;
    }

    function FoundItemsDirectiveController() {
        var ctrl = this;

        ctrl.isEmpty = function() {
            return ctrl.items && ctrl.items.length == 0;
        };
    }

    NarrowItDownController.$inject = ['MenuSearchService']

    function NarrowItDownController(MenuSearchService) {
        var ctrl = this;
        ctrl.found = undefined;
        ctrl.searchTerm = "";

        ctrl.getMatchedMenuItems = function() {
            var promise = MenuSearchService.getMatchedMenuItems(ctrl.searchTerm);

            promise
                .then(function(foundItems) {
                    ctrl.found = foundItems;
                })
                .catch(function(error) {
                    console.log(error);
                });
        };

        ctrl.removeItem = function(itemIndex) {
            if (ctrl.found)
                ctrl.found.splice(itemIndex, 1);
        };
    }

    MenuSearchService.$inject = ['$http', 'ApiBasePath'];

    function MenuSearchService($http, ApiBasePath) {
        var service = this;

        service.getMatchedMenuItems = function(searchTerm) {

            return $http({
                    method: "GET",
                    url: (ApiBasePath + "/menu_items.json")
                }).then(function(result) {
                    var foundItems = [];

                    foundItems = result.data.menu_items.filter(function(element) {
                        return element.description.indexOf(searchTerm) !== -1;
                    });

                    return foundItems;
                })
                .catch(function(error) {
                    console.log(error);
                });
        };
    }
})();