"use strict";

angular.module('app.home').controller('HomeContactUsController', function ($scope, $window, ContactUsService) {
    $scope.sendData = {
        email: '',
        firstname: '',
        lastname: '',
        message: '',
        subject: 'Contact US'
    };
    $scope.scrollDown = function () {
        $window.scrollTo(0, angular.element('.contact-ways').offset().top - 100);
    };
    $scope.onSend = function () {
        if($scope.sendData.email == '' || $scope.sendData.firstname == '' || $scope.sendData.lastname == '' || $scope.sendData.message == '')
            return;

        ContactUsService.post($scope.sendData).then(function (re) {
            console.log('ContactUs Post : ' + re);
        });

    };
})
