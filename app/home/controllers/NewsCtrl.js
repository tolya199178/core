"use strict";

angular.module('app.home').controller('HomeNewsController', function ($scope, $window) {
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
        console.log(item.sdate, item.edate);
    };


    $scope.news = [
        {
            id: 1,
            title: "It’s 20 years into the future and the world is a dark, dystopian place, where nation states have merged with multinational corporations to form super-powerful transnational conglomerates.  Locked in a constant war for power and control, the three surviving entities are waging a shadow war using small groups of private paramilitary cyborgs.  These “wolf pack” units specialize in assassination, kidnapping, stealing corporate secrets, and sabotage, often operating with impunity inside the borders of neutral nations.",
            content: "They rely on an army of augmented humans, whose only purpose is to serve and fight their employers. As an experienced support, assault or recon operative – you must navigate your way in a world of international conspiracy and augmented reality.",
            posted_date: "16.05.2017",
            image: "../styles/img/temp/news/item1.jpg"
        }, {
            id: 2,
            title: "Refreshing combination of futuristic cyberpunk game elements and Ghost In the Shell-inspired VR stealth shooter gameplay.",
            content: "This multiplayer first person shooter is atmospheric and immersive. It’s basic gameplay, but its dark dystopian ambiance will have players exploring in VR space. Firmly set in a cyberpunk high-tech futuristic world, enhanced humans are battling out to protect the interests of international conglomerates that control all resources, trade and territories. Choose whether to fight on the side of United Energy, TekSekProm or XiWu Financial Group with a host of different ways to play (from full-frontal assaults to sneaky backdoor hacking).",
            posted_date: "16.05.2017",
            image: "../styles/img/temp/news/item2.jpg"
        }, {
            id: 3,
            title: "Shadowcore is a Ghost in the Shell-inspired, VR-only action title that provides much more than a worthwhile gaming experience. Focusing mainly on the missions and struggle for power of paramilitary organisations directed by international conglomerates, as they battle it out in an cyberpunk world, this action filled game has a lot to offer.",
            content: "Perfect for those who want high-tech, sleek, and industrial visuals, minimalist aesthetic and a new world in which to immerse themselves. Shdowcore ticks all the boxes when it comes to a stand-alone VR-only FPS with incredible level of immersion, scale and detail!",
            posted_date: "16.05.2017",
            image: "../styles/img/temp/news/item1.jpg"
        }
    ];

    $scope.scrollDown = function () {
        $window.scrollTo(0, angular.element('.months-wrapper').offset().top - 100);
    };
})
