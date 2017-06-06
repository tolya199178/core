"use strict";

angular.module('app.home').controller('HomeJoinTeamController', function ($scope, $window, SubscribersService) {
    $scope.items = [
        {id: 1, title: "Are You a developer? We need You!", image: "../styles/img/temp/join/item1.jpg", ymd: "16.05.2017"},
        {id: 1, title: "Are You a developer? We need You!", image: "../styles/img/temp/join/item1.jpg", ymd: "16.05.2017"},
        {id: 1, title: "Are You a developer? We need You!", image: "../styles/img/temp/join/item1.jpg", ymd: "16.05.2017"}
    ];

    $scope.scrollDown = function () {
        $window.scrollTo(0, angular.element('.questions-div').offset().top - 100);
    };

    $scope.subscriber = {
        email: ''
    };
    $scope.onSubscriber = function () {
        if (!$scope.dataform.email.$error.email && !$scope.dataform.email.$error.required) {
            SubscribersService.post($scope.subscriber).then(function (re) {
                if (re.data) {
                    $.bigBox({
                        title: 'Success',
                        content: 'Your email is successfully registered in our site',
                        color: "#6d97b8",
                        icon: "fa fa-key shake animated",
                        number: '',
                        timeout: 6000
                    });
                } else {
                    $.bigBox({
                        title: 'Failed',
                        content: 'Your email is already registered in our site',
                        color: "#C46A69",
                        icon: "fa fa-warning shake animated",
                        number: '',
                        timeout: 6000
                    });
                }
            });
        }
    }
});
