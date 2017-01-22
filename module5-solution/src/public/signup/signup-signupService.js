(function() {
    'use strict';

    angular
        .module('public')
        .service('SignupService', SignupService);

    function SignupService() {
        var service = this;

        service.info = {
            first_name: undefined,
            last_name: undefined,
            email: undefined,
            phone: undefined,
            favorite_dish: undefined,
            favoriteDishData: undefined
        };

        service.getSignupInfo = function() {
            return service.info;
        }

        service.setSignupInfo = function(info, favoriteDishData) {
            service.info = info;
            service.info.favoriteDishData = favoriteDishData;
        }
    };

}());