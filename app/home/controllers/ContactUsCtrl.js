"use strict";

angular.module('app.home').controller('HomeContactUsController', function ($scope, $window) {
    $scope.scrollDown = function () {
        $window.scrollTo(0, angular.element('.contact-ways').offset().top - 100);
    };
})
