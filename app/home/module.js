"use strict";

angular.module('app.home', ['ui.router']).config(function ($stateProvider) {
    $stateProvider
        .state('home', {
            url: '/home',
            views: {
                root: {
                    templateUrl: 'app/home/views/home.html',
                    controller: 'HomeController'
                }
            }
        })
        .state('about', {
            url: '/about',
            views: {
                root: {
                    templateUrl: 'app/home/views/about.html',
                    controller: 'HomeAboutController'
                }
            }
        })
        .state('about.high_concept', {
            url: '/high_concept',
            views: {
                "aboutContent": {
                    templateUrl: 'app/home/views/about-templates/high_concept.html'
                }
            }
        })
        .state('about.visual_style', {
            url: '/visual_style',
            views: {
                "aboutContent": {
                    templateUrl: 'app/home/views/about-templates/visual_style.html'
                }
            }
        })
        .state('about.world', {
            url: '/world',
            views: {
                "aboutContent": {
                    templateUrl: 'app/home/views/about-templates/world.html'
                }
            }
        })
        .state('about.gameplay', {
            url: '/gameplay',
            views: {
                "aboutContent": {
                    templateUrl: 'app/home/views/about-templates/gameplay.html'
                }
            }
        })
        .state('about.character_classes', {
            url: '/character_classes',
            views: {
                "aboutContent": {
                    templateUrl: 'app/home/views/about-templates/character_classes.html'
                }
            }
        })
        .state('about.missions', {
            url: '/missions',
            views: {
                "aboutContent": {
                    templateUrl: 'app/home/views/about-templates/missions.html'
                }
            }
        })
        .state('about.tech', {
            url: '/tech',
            views: {
                "aboutContent": {
                    templateUrl: 'app/home/views/about-templates/tech.html'
                }
            }
        })
        .state('about.risks', {
            url: '/risks',
            views: {
                "aboutContent": {
                    templateUrl: 'app/home/views/about-templates/risks.html'
                }
            }
        })
        .state('about.extras', {
            url: '/extras',
            views: {
                "aboutContent": {
                    templateUrl: 'app/home/views/about-templates/extras.html'
                }
            }
        })
        .state('news', {
            url: '/news',
            views: {
                root: {
                    templateUrl: 'app/home/views/news.html',
                    controller: 'HomeNewsController'
                }
            }
        })
        .state('contactUs', {
            url: '/contact-us',
            views: {
                root: {
                    templateUrl: 'app/home/views/contact-us.html',
                    controller: 'HomeContactUsController'
                }
            }
        })
});
