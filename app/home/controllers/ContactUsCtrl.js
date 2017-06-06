"use strict";

angular.module('app.home').controller('HomeContactUsController', function ($scope, $window, ContactUsService, SubscribersService) {
    $scope.sendData = {
        email: '',
        firstname: '',
        lastname: '',
        message: '',
        subject: 'Technical Issue'
    };

    $scope.isContact = true;
    $scope.scrollDown = function () {
        $window.scrollTo(0, angular.element('.contact-ways').offset().top - 100);
    };
    $scope.onSend = function () {
        if($scope.sendData.email == '' || $scope.sendData.firstname == '' || $scope.sendData.lastname == '' || $scope.sendData.message == '')
            return;

        ContactUsService.post($scope.sendData).then(function (re) {
            $scope.isContact = false;
            console.log('ContactUs Post : ' + re);
        });

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
})
