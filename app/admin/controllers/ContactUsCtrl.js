'use strict';

angular.module('app.admin').controller('ContactUsController', function ($scope, $timeout, ContactUsService, $filter) {
    $scope.tableData = $scope.safeData = [];
    $scope.currRow = {};
    $scope.loading = true;
    $scope.email = {
        subject: '',
        content: ''
    };

    $scope.getData = function () {
        $scope.loading = true;

        ContactUsService.get().then(function (response) {
            $scope.tableData = $scope.safeData = response.data;
            $scope.loading = false;
        });
    };
    $scope.getData();

    $scope.deleteRow = function (rowId, rowInd) {
        if (confirm('Are you sure want to delete this?')) {
            $scope.loading = true;
            ContactUsService.delete(rowId).then(function () {
                //$scope.getData();
                $scope.tableData.splice(rowInd, 1);
                $scope.loading = false;
            });
        }
    };

    $scope.checkAll = function () {
        angular.forEach($scope.tableData, function (val) {
            val.checked = $scope.allCheck;
        })
    };

    $scope.getCheckedEmails = function () {
        var emails = [];
        angular.forEach($filter('filter')($scope.tableData, {checked: true}), function (val) {
            emails[emails.length] = val.email;
        });
        return emails;
    };

    $scope.initMail = function () {
        $scope.email.subject = '';
        $scope.email.content = '';
    };

    $scope.sendMail = function () {
        $scope.loading = true;
        var data = {
            emails: $scope.getCheckedEmails(),
            subject: $scope.email.subject,
            content: $scope.email.content
        };
        ContactUsService.sendMail(data).then(function () {
            $('#myModal').modal('hide');
            $scope.loading = false;
            //$scope.getData();
        }, function(){
            $scope.loading = false;
        });
    };
});