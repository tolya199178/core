(function () {
    'use strict';

    angular.module('app').directive('youtube', function ($sce) {
        return {
            restrict: 'EA',
            template: "<iframe class='video-responsive' src='{{url}}' frameborder='0' allowfullscreen></iframe>",
            scope: {
                video: '@video'
            },
            link: function (scope) {
                scope.$watch('video', function (video_id) {
                    scope.url = $sce.trustAsResourceUrl("//www.youtube.com/embed/" + video_id);
                });
            }
        };
    });
})();
