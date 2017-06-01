'use strict';

angular.module('app.admin').controller('UsersController', function ($scope, $timeout, UsersService) {
    $scope.oldPwd = '';
    $scope.newPwd = '';
    $scope.retypePwd = '';

    $scope.save = function () {
        if (confirm('Are you sure want to change password?')) {
            $scope.loading = true;
            if($scope.oldPwd == '' || $scope.newPwd == '' || $scope.retypePwd == '' || $scope.newPwd != $scope.retypePwd)
                return;

            var data = {
                oldPwd: $scope.oldPwd,
                newPwd: $scope.newPwd
            };
            UsersService.setPassword(data).then(function (re) {
                $scope.loading = false;

                $.bigBox({
                    title: 'Success',
                    content: 'The current password is successfully changed to the new password.',
                    color: "#6d97b8",
                    icon: "fa fa-key shake animated",
                    number: '',
                    timeout: 6000
                });

                //$scope.getData();
            }, function(){
                $scope.loading = false;
            });
        }
    };
});