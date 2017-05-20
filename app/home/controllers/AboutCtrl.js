"use strict";

angular.module('app.home').controller('HomeAboutController', function ($scope, $window) {
    $scope.leftMenus = [
        {id: 1, title: "High Concept", state: "high_concept"},
        {id: 2, title: "Visual Style", state: "visual_style"},
        {id: 3, title: "World", state: "world"},
        {id: 4, title: "Game Play", state: "gameplay"},
        {id: 5, title: "Character Classes", state: "character_classes"},
        {id: 6, title: "Missions", state: "missions"},
        {id: 7, title: "Tech", state: "tech"},
        {id: 8, title: "Risks", state: "risks"},
        {id: 9, title: "Extras", state: "extras"}
    ];
    $scope.scrollDown = function () {
        $window.scrollTo(0, angular.element('.content-section').offset().top - 100);
    };
})
