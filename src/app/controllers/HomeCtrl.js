(function () {
    'use strict';

    angular
        .module('app')
        .controller('HomeController', HomeController);

    /** @ngInject */
    function HomeController() {
        var vm = this;
        vm.videos = [
            {
                name: "FIRST PUBLIC GAMEPLAY IS ON EVERYTHING!",
                duration: "25:46",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
                url: "./assets/temp/video1.mp4"
            }, {
                name: "VOLUPTATEM ACCUSANTIUM DOLOREMQUE.",
                duration: "17:46",
                description: "Excepteur sint occaecat cupidatat non proident. sunt in culpa qui officia deserunt mollit anim",
                url: "./assets/temp/video2.mp4"
            }, {
                name: "TOTAM REM APERIAM, EAQUE IPSA QUAE AB ILL.",
                duration: "47:46",
                description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
                url: "./assets/temp/video3.mp4"
            },{
                name: "FIRST PUBLIC GAMEPLAY IS ON EVERYTHING!",
                duration: "25:46",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
                url: "./assets/temp/video1.mp4"
            }, {
                name: "VOLUPTATEM ACCUSANTIUM DOLOREMQUE.",
                duration: "17:46",
                description: "Excepteur sint occaecat cupidatat non proident. sunt in culpa qui officia deserunt mollit anim",
                url: "./assets/temp/video2.mp4"
            }, {
                name: "TOTAM REM APERIAM, EAQUE IPSA QUAE AB ILL.",
                duration: "47:46",
                description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
                url: "./assets/temp/video3.mp4"
            }
        ];

        vm.characters = [
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
    }
})();
