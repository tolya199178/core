(function () {
    'use strict';

    angular
        .module('app')
        .controller('MainController', MainController);

    /** @ngInject */
    function MainController($rootScope, $window) {
        var vm = this;
        vm.a =  1111321;
    }
})();
