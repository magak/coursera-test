(function() {
    'use strict';

    angular
        .module('public')
        .controller('MyInfoController', MyInfoController)

    MyInfoController.$inject = ['signupInfo', 'ApiPath'];

    function MyInfoController(signupInfo, ApiPath) {
        var $ctrl = this;

        $ctrl.signupInfo = signupInfo;
        $ctrl.basePath = ApiPath;
    }

}());