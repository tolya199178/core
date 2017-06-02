"use strict";

angular.module('app.auth', [
    'ui.router'
]).config(function ($stateProvider) {
    $stateProvider
        .state('login', {
            url: '/login',
            views: {
                root: {
                    templateUrl: 'app/auth/views/login.html',
                    controller: 'LoginCtrl'
                }
            },
            data: {
                title: 'Login',
                htmlId: 'extr-page'
            },
            resolve: {
                srcipts: function (lazyScript) {
                    return lazyScript.register([
                        'build/vendor.ui.js'
                    ])

                }
            }
        })

        .state('register', {
            url: '/register',
            views: {
                root: {
                    templateUrl: 'app/auth/views/register.html'
                }
            },
            data: {
                title: 'Register',
                htmlId: 'extr-page'
            }
        })

        .state('forgotPassword', {
            url: '/forgot-password',
            views: {
                root: {
                    templateUrl: 'app/auth/views/forgot-password.html'
                }
            },
            data: {
                title: 'Forgot Password',
                htmlId: 'extr-page'
            }
        })

        .state('lock', {
            url: '/lock',
            views: {
                root: {
                    templateUrl: 'app/auth/views/lock.html'
                }
            },
            data: {
                title: 'Locked Screen',
                htmlId: 'lock-page'
            }
        })
})