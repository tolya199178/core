"use strict";


angular.module('app.admin', ['ui.router']).config(function ($stateProvider) {

    $stateProvider

        .state('app.admin', {
            url: '/admin',
            data: {
                title: 'Admin'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/admin/views/news.html',
                    controller: 'NewsController'
                }
            }
        })
        .state('app.admin.news', {
            url: '/news',
            data: {
                title: 'News Management'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/admin/views/news.html',
                    controller: 'NewsController'
                }
            }
        })
        .state('app.admin.videos', {
            url: '/videos',
            data: {
                title: 'Video Management'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/admin/views/videos.html',
                    controller: 'VideosController'
                }
            }
        })
        .state('app.admin.images', {
            url: '/images',
            data: {
                title: 'Image Management'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/admin/views/images.html',
                    controller: 'ImagesController'
                }
            }
        })
        .state('app.admin.users', {
            url: '/users',
            data: {
                title: 'User Management'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/admin/views/users.html',
                    controller: 'UsersController'
                }
            }
        })
        .state('app.admin.contactUs', {
            url: '/contact-us',
            data: {
                title: 'Contact Us'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/admin/views/contact-us.html',
                    controller: 'ContactUsController'
                }
            }
        })
        .state('app.admin.subscribers', {
            url: '/subscribers',
            data: {
                title: 'Subscribers'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/admin/views/subscribers.html',
                    controller: 'SubscribersController'
                }
            }
        })
});
