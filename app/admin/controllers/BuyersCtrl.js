'use strict';

angular.module('app.admin').controller('BuyersController', function ($scope, $filter, $timeout, BuyersService) {
    $scope.tableData = $scope.safeData = [];
    $scope.currRow = {};
    $scope.loading = true;
    $scope.allCheck = false;
    $scope.email = {
        title: '',
        content: ''
    };

    $scope.getData = function () {
        $scope.loading = true;

        $timeout(function () {
            $scope.loading = false;
            $scope.tableData = $scope.safeData = [
                {id: 1, email: 'abc', purchased_date: '2017-05-19'},
                {id: 2, email: 'abc', purchased_date: '2017-05-19'},
                {id: 3, email: 'abc', purchased_date: '2017-05-19'},
                {id: 4, email: 'abc', purchased_date: '2017-05-19'}
            ];
        }, 500);
        return;

        BuyersService.get().then(function (response) {
            $scope.tableData = $scope.safeData = response.data;
            $scope.loading = false;
        });
    };
    $scope.getData();

    $scope.deleteRow = function (rowId) {
        if (confirm('Are you sure want to delete this?')) {
            $scope.loading = true;
            BuyersService.delete(rowId).then(function () {
                $scope.getData();
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
        $scope.email.title = '';
        $scope.email.content = '';
    };

    $scope.sendMail = function () {
        $scope.loading = true;
        var data = {
            emails: $scope.getCheckedEmails(),
            title: $scope.email.title,
            content: $scope.email.content
        };
        BuyersService.sendMail(data).then(function () {
            $('#myModal').modal('hide');
            $scope.getData();
        });
    };
});