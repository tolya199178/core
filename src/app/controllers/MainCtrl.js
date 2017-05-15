(function () {
    'use strict';

    angular
        .module('app')
        .controller('MainController', MainController);

    /** @ngInject */
    function MainController() {
        var vm = this;
        vm.a =  1111321;
    }
})();
