(function() {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];

    function ToBuyController(ShoppingListCheckOffService) {
        var ctrl = this;

        ctrl.Items = ShoppingListCheckOffService.getToBuyItems();
        ctrl.BuyItem = function(index) {
            ShoppingListCheckOffService.buyItem(index);
        };
    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var ctrl = this;

        ctrl.Items = ShoppingListCheckOffService.getAlreadyBoughtItems();
    }

    function ShoppingListCheckOffService() {
        var service = this;

        var toBuyItems = [
            { name: "cookies", quantity: 10 },
            { name: "apples", quantity: 2 },
            { name: "tomatoes", quantity: 3 },
            { name: "lemons", quantity: 4 },
            { name: "cucumbers", quantity: 6 }
        ];
        var alreadyBoughtItems = [];

        service.getToBuyItems = function() {
            return toBuyItems;
        };
        service.getAlreadyBoughtItems = function() {
            return alreadyBoughtItems;
        };
        service.buyItem = function(index) {
            alreadyBoughtItems.push(toBuyItems[index]);
            toBuyItems.splice(index, 1);
        };
    }

})();