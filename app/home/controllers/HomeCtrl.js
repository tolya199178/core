"use strict";

angular.module('app.home').controller('HomeController', function ($scope, $window, ServerURL) {
    $scope.screenWidth = $window.innerWidth;

    $scope.videos = [
        {
            name: "FIRST PUBLIC GAMEPLAY IS ON EVERYTHING!",
            duration: "25:46",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
            code: "Q7HGmUBQOHM"
        }, {
            name: "VOLUPTATEM ACCUSANTIUM DOLOREMQUE.",
            duration: "17:46",
            description: "Excepteur sint occaecat cupidatat non proident. sunt in culpa qui officia deserunt mollit anim",
            code: "du1IFCWaD5k"
        }, {
            name: "TOTAM REM APERIAM, EAQUE IPSA QUAE AB ILL.",
            duration: "47:46",
            description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
            code: "C5Qp1hlXLko"
        }, {
            name: "FIRST PUBLIC GAMEPLAY IS ON EVERYTHING!",
            duration: "25:46",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
            code: "Q7HGmUBQOHM"
        }, {
            name: "VOLUPTATEM ACCUSANTIUM DOLOREMQUE.",
            duration: "17:46",
            description: "Excepteur sint occaecat cupidatat non proident. sunt in culpa qui officia deserunt mollit anim",
            code: "du1IFCWaD5k"
        }, {
            name: "TOTAM REM APERIAM, EAQUE IPSA QUAE AB ILL.",
            duration: "47:46",
            description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
            code: "C5Qp1hlXLko"
        }
    ];

    $scope.characters = [
        {
            title: "ASSAULT",
            category: "Consecteur",
            specs: [
                "Nemo enim ipsam",
                "Voluptatem quia voluptas",
                "Sit aspernatur",
                "Aut odit aut fugit",
                "Sed quia consequuntur",
                "Magni dolores eos qu"
            ],
            description: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
        },
        {
            title: "TESLA",
            category: "Consecteur",
            specs: [
                "Nemo enim ipsam",
                "Voluptatem quia voluptas",
                "Sit aspernatur",
                "Aut odit aut fugit",
                "Sed quia consequuntur",
                "Magni dolores eos qu"
            ],
            description: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
        },
        {
            title: "RECON",
            category: "Consecteur",
            specs: [
                "Nemo enim ipsam",
                "Voluptatem quia voluptas",
                "Sit aspernatur",
                "Aut odit aut fugit",
                "Sed quia consequuntur",
                "Magni dolores eos qu"
            ],
            description: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
        }
    ];

    $scope.scrollDown = function () {
        $window.scrollTo(0, angular.element('.video-section').offset().top - 100);
    };

    $scope.shop = function () {
        $window.open(ServerURL + "paypal/order", "_self");
    };
});
