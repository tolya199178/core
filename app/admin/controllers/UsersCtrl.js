'use strict';

angular.module('app.admin').controller('UsersController', function ($scope, $timeout, UsersService) {
    $scope.oldPwd = '';
    $scope.newPwd = '';
    $scope.retypePwd = '';

    $scope.save = function () {
        if (confirm('Are you sure want to change password?')) {
            $scope.loading = true;
            var data = {
                oldPwd: $scope.oldPwd,
                newPwd: $scope.newPwd
            };
            UsersService.setPassword(data).then(function () {
                $scope.loading = false;
                //$scope.getData();
            }, function(){
                $scope.loading = false;
            });
        }
    };
});