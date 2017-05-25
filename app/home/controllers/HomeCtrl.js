"use strict";

angular.module('app.home').controller('HomeController', function ($scope, $window, ServerURL) {
    $scope.screenWidth = $window.innerWidth;

    $scope.videos = [
        {
            name: "FIRST PUBLIC GAMEPLAY IS ON EVERYTHING!",
            duration: "25:46",
            description: "Navigating the next frontier of multiplayer has never felt so real and connected, delivered online and in VR.",
            code: "Q7HGmUBQOHM"
        }, {
            name: "VOLUPTATEM ACCUSANTIUM DOLOREMQUE.",
            duration: "17:46",
            description: "A \"Ghost in the Shell\"-inspired theme coupled with action gameplay, intuitive controls, challenging enemies, and industrial atmosphere.",
            code: "du1IFCWaD5k"
        }, {
            name: "TOTAM REM APERIAM, EAQUE IPSA QUAE AB ILL.",
            duration: "47:46",
            description: "Team up and become the adrenaline-charged mercenaries of your own sci-fi adventure set in the industrial post-apocalyptic world of the future.",
            code: "C5Qp1hlXLko"
        }, {
            name: "FIRST PUBLIC GAMEPLAY IS ON EVERYTHING!",
            duration: "25:46",
            description: "Navigating the next frontier of multiplayer has never felt so real and connected, delivered online and in VR.",
            code: "Q7HGmUBQOHM"
        }, {
            name: "VOLUPTATEM ACCUSANTIUM DOLOREMQUE.",
            duration: "17:46",
            description: "A \"Ghost in the Shell\"-inspired theme coupled with action gameplay, intuitive controls, challenging enemies, and industrial atmosphere.",
            code: "du1IFCWaD5k"
        }, {
            name: "TOTAM REM APERIAM, EAQUE IPSA QUAE AB ILL.",
            duration: "47:46",
            description: "Team up and become the adrenaline-charged mercenaries of your own sci-fi adventure set in the industrial post-apocalyptic world of the future.",
            code: "C5Qp1hlXLko"
        }
    ];

    $scope.characters = [
        {
            category: "Assault",
            specs: [
                "Standard mercenary",
                "Armed with assault rifle and grenade launcher",
                "Efficient at medium-range assaults",
                "Medium teleport countdown"
            ],
            description: "Choose the assault character if your playing style is aggressive and dynamic. The standard soldier is equipped to move quickly through the game environment. You are armed with an assault rifle and a grenade launcher for maximum damage at medium range.  With a medium amount of armour and a medium teleport cooldown for immersive gameplay."
        },{
            category: "Consecteur",
            specs: [
                "Slow-moving and heavily armoured",
                "Strong defence and strategy kills",
                "Equipped with shotgun and EMP cannon for close-range assault",
                "Slow teleport cooldown"
            ],
            description: "Join the ranks of the support team for one of the international conglomerates battling for control of Earth’s resources and territories. Your character is heavily armoured and adept at taking and holding territory. Utilize your augmented body and the cybernetic implants that give you enhanced abilities. Support characters are capable of massive damage at close range with their shotgun. They are also equipped with an EMP cannon that doesn’t do any damage at all, but can temporarily stun enemies, preventing them from teleporting or shooting back."
        },{
            category: "Recon",
            specs: [
                "Fast and mobile",
                "Minimal amount of body armour",
                "Short teleport countdown",
                "Efficient at short range assault"
            ],
            description: "Recon characters strike a balance between mobility and assault capabilities. More lightly armoured than other characters, they are fast and hard to hit. You benefit from a shorter teleport cooldown and high-damage railgun and a machine pistol.  Move quickly and efficiently between locations and launch surprise attacks on your unsuspecting enemies."
        }
    ];

    $scope.scrollDown = function () {
        $window.scrollTo(0, angular.element('.video-section').offset().top - 100);
    };

    $scope.shop = function () {
        $window.open(ServerURL + "paypal/order", "_self");
    };
});
