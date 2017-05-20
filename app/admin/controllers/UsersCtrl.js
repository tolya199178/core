'use strict';

angular.module('app.admin').controller('UsersController', function ($scope, $timeout) {
    $scope.oldPwd = '';
    $scope.newPwd = '';
    $scope.retypePwd = '';

    $scope.save = function () {
        if (confirm('Are you sure want to change password?')) {
            $scope.loading = true;
            $timeout(function () {
                $scope.loading = false;
                $timeout(function () {
                    alert('Success!!!');
                }, 100);
            }, 500);
        }
    };
});