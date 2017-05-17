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
                    controller: 'AboutController'
                }
            }
        })
        .state('news', {
            url: '/news',
            views: {
                root: {
                    templateUrl: 'app/home/views/news.html',
                    controller: 'NewsController'
                }
            }
        })
        .state('contact-us', {
            url: '/contact-us',
            views: {
                root: {
                    templateUrl: 'app/home/views/contact-us.html',
                    controller: 'ContactUsController'
                }
            }
        })
});
