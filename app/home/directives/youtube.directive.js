angular.module('app').directive('youtube', function ($sce) {
    return {
        restrict: 'EA',
        template: '<div id="overlay{{id}}" class="video-overlay" ng-click="play(id);">' +
        '<img class="" ng-src="{{image}}"/>' +
        '<div class="play-button"></div>' +
        '</div>' +
        '<iframe id="video{{id}}" class="video-responsive" src="{{url}}" frameborder="0" allowfullscreen></iframe>',
        scope: {
            id: '=id',
            image: '=image',
            video: '@video'
        },
        link: function (scope) {
            scope.$watch('video', function (code) {
                scope.url = $sce.trustAsResourceUrl("//www.youtube.com/embed/" + code + "?showinfo=0");
            });
            scope.play = function (videoId) {
                $("#video" + videoId)[0].src += "&autoplay=1";
                $("#overlay" + videoId).hide();
                event.preventDefault();
            };
        }
    };
});