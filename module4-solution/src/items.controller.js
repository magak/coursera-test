(function() {
    'use strict';

    angular
        .module('MenuApp')
        .controller('ItemsController', ItemsController)

    ItemsController.$inject = ["menuitems"];

    function ItemsController(menuitems) {
        var ctrl = this;
        ctrl.menuitems = menuitems;
    }

}());