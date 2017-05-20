'use strict';

angular.module('app.admin').controller('MailsController', function ($scope, $filter, $timeout, BuyersService) {
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
                {id: 1, to_user: 'abc@def.com', sent_date:'2017-05-19', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
                {id: 2, to_user: 'abc@def.com', sent_date:'2017-05-19', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
                {id: 3, to_user: 'xyz@def.com', sent_date:'2017-05-19', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
                {id: 4, to_user: 'xyz@def.com', sent_date:'2017-05-19', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
                {id: 5, to_user: 'abc@def.com', sent_date:'2017-05-19', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
                {id: 6, to_user: 'xyz@def.com', sent_date:'2017-05-19', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
                {id: 7, to_user: 'xyz@def.com', sent_date:'2017-05-19', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
                {id: 8, to_user: 'abc@def.com', sent_date:'2017-05-19', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
                {id: 9, to_user: 'xyz@def.com', sent_date:'2017-05-19', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
                {id: 10, to_user: 'xyz@def.com', sent_date:'2017-05-19', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
                {id: 11, to_user: 'abc@def.com', sent_date:'2017-05-19', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
                {id: 12, to_user: 'xyz@def.com', sent_date:'2017-05-19', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
                {id: 13, to_user: 'xyz@def.com', sent_date:'2017-05-19', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
                {id: 14, to_user: 'abc@def.com', sent_date:'2017-05-19', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
                {id: 15, to_user: 'xyz@def.com', sent_date:'2017-05-19', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
                {id: 16, to_user: 'xyz@def.com', sent_date:'2017-05-19', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
                {id: 17, to_user: 'abc@def.com', sent_date:'2017-05-19', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
                {id: 18, to_user: 'xyz@def.com', sent_date:'2017-05-19', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
                {id: 19, to_user: 'xyz@def.com', sent_date:'2017-05-19', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
                {id: 20, to_user: 'abc@def.com', sent_date:'2017-05-19', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
                {id: 21, to_user: 'xyz@def.com', sent_date:'2017-05-19', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
                {id: 22, to_user: 'xyz@def.com', sent_date:'2017-05-19', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
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
    $scope.deleteMails = function () {
        if (confirm('Are you sure want to delete checked emails?')) {
            $scope.loading = true;
            alert($scope.getCheckedIds());


            /*BuyersService.delete($scope.getCheckedIds()).then(function () {
                $scope.getData();
            });*/
            $scope.getData();

        }
    };

    $scope.checkAll = function () {
        angular.forEach($scope.tableData, function (val) {
            val.checked = $scope.allCheck;
        })
    };

    $scope.getCheckedIds = function () {
        var ids = [];
        angular.forEach($filter('filter')($scope.tableData, {checked: true}), function (val) {
            ids[ids.length] = val.id;
        });
        return ids;
    };
});