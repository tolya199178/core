"use strict";

angular.module('app.home').controller('HomeJoinTeamController', function ($scope, $window) {
    $scope.items = [
        {id: 1, title: "Are You a developer? We need You!", image: "../styles/img/temp/join/item1.jpg", ymd: "16.05.2017"},
        {id: 1, title: "Are You a developer? We need You!", image: "../styles/img/temp/join/item1.jpg", ymd: "16.05.2017"},
        {id: 1, title: "Are You a developer? We need You!", image: "../styles/img/temp/join/item1.jpg", ymd: "16.05.2017"}
    ];

    $scope.scrollDown = function () {
        $window.scrollTo(0, angular.element('.questions-div').offset().top - 100);
    };
});
