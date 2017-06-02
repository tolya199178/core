"use strict";

angular.module('app.auth').controller('LoginCtrl', function ($scope, $state, UsersService) {
    $scope.password = '';
    localStorage.isLogin = '';
    $scope.login = function () {
        if($('#login-form').valid()){
            UsersService.login($scope.password).then(function (res) {
                localStorage.isLogin = true;
                $state.go('app.admin');
            });
        }
    }
})
