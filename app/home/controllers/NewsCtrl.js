"use strict";

angular.module('app.home').controller('HomeNewsController', function ($scope, $window, NewsService) {
    $scope.months = [];
    $scope.getMonthStrings = function () {
        var now = new Date();
        var y = now.getFullYear();
        var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        for (var m = now.getMonth() + 1; m >= 1; m--) {
            var startDate = moment([y, m - 1]);
            var endDate = moment(startDate).endOf('month');

            $scope.months[$scope.months.length] = {
                str: monthNames[m - 1],
                sdate: startDate.format("YYYY-MM-DD"),
                edate: endDate.format("YYYY-MM-DD")
            };
        }
        var preYear = y - 1;
        $scope.months[$scope.months.length] = {
            str: preYear,
            sdate: preYear + "-01-01",
            edate: preYear + "-12-31"
        };
    };
    $scope.getMonthStrings();

    $scope.getData = function (item) {
        item = item || $scope.months[0];
        NewsService.get(item.sdate, item.edate).then(function (response) {
            $scope.news = response.data;
            console.log(response.data);
            angular.forEach($scope.news, function (val, key) {
                val.image = "../styles/img/temp/news/item" + (key % 2 + 1) + ".jpg";
            });
        });
    };
    $scope.getData();

    $scope.scrollDown = function () {
        $window.scrollTo(0, angular.element('.months-wrapper').offset().top - 100);
    };
})
