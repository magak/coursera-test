(function() {
    'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        $scope.message = "";
        $scope.dishesList = "";

        $scope.CheckDishesList = function() {
            if ($scope.dishesList) {
                var dishes = $scope.dishesList.split(',');
                if (dishes.length <= 3) {
                    $scope.message = "Enjoy!";
                } else {
                    $scope.message = "Too much!";
                }
            } else {
                $scope.message = "Please enter data first";
            }
        };
    }

})();