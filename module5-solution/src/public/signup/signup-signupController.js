(function() {
    'use strict';

    angular
        .module('public')
        .controller('SignupController', SignupController)

    SignupController.$inject = ['SignupService', 'MenuService'];

    function SignupController(SignupService, MenuService) {
        var $ctrl = this;

        $ctrl.status = "";
        $ctrl.errorOccured = false;
        $ctrl.signupInfo = SignupService.getSignupInfo();

        $ctrl.submit = function() {
            var favorite_dish = ($ctrl.signupInfo.favorite_dish || "");

            MenuService.getMenuItem(favorite_dish)
                .then(function(data) {
                    SignupService.setSignupInfo($ctrl.signupInfo, data);
                    $ctrl.status = "Your information has been saved";
                    $ctrl.errorOccured = false;
                    console.log("favorite dish:" + JSON.stringify(data));
                })
                .catch(function(error) {
                    var err = error;
                    $ctrl.errorOccured = true;
                    console.log(err);
                });
        }
    }

}());