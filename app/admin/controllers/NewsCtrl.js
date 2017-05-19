'use strict';

angular.module('app.admin').controller('NewsController', function ($scope, $timeout, NewsService) {
    $scope.tableData = $scope.safeData = [];
    $scope.currRow = {};
    $scope.loading = true;

    $scope.getData = function () {
        $scope.loading = true;

        $timeout(function () {
            $scope.loading = false;
            $scope.tableData = $scope.safeData = [
                {id: 1, title: 'abc', content: 'def', posted_date: '2017-05-19', image: 'aa.jpg'},
                {id: 2, title: 'abc', content: 'def', posted_date: '2017-05-19', image: 'aa.jpg'},
                {id: 3, title: 'abc', content: 'def', posted_date: '2017-05-19', image: 'aa.jpg'},
                {id: 4, title: 'abc', content: 'def', posted_date: '2017-05-19', image: 'aa.jpg'}
            ];
        }, 500);
        return;

        NewsService.get().then(function (response) {
            $scope.tableData = $scope.safeData = response.data;
            $scope.loading = false;
        });
    };
    $scope.getData();

    $scope.save = function () {
        $scope.loading = true;
        var data = $scope.currRow;
        NewsService.save(data).then(function () {
            $('#myModal').modal('hide');
            $scope.getData();
        });
    };

    $scope.addRow = function () {
        $scope.currRow = {
            id: 0,
            sport_name: ''
        };
    };

    $scope.editRow = function (row) {
        $scope.currRow = JSON.parse(angular.toJson(row));
        $('#myModal').modal('show');
    };

    $scope.deleteRow = function (rowId) {
        if (confirm('Are you sure want to delete this?')) {
            $scope.loading = true;
            NewsService.delete(rowId).then(function () {
                $scope.getData();
            });
        }
    };
});