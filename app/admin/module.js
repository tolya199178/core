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
        .state('app.admin.newsletter', {
            url: '/newsletter',
            data: {
                title: 'Newsletter User'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/admin/views/newsletter.html',
                    controller: 'NewsletterController'
                }
            }
        })
        .state('app.admin.buyers', {
            url: '/buyers',
            data: {
                title: 'Buyers'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/admin/views/buyers.html',
                    controller: 'BuyersController'
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
        .state('app.admin.mails', {
            url: '/mails',
            data: {
                title: 'Mail Manage'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/admin/views/mails.html',
                    controller: 'MailsController'
                }
            }
        })
        .state('app.admin.udids', {
            url: '/udid',
            data: {
                title: 'UDID'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/admin/views/udids.html',
                    controller: 'UdidsController'
                }
            }
        })
});
