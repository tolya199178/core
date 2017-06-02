(function () {
    'use strict';

    angular.module('app.admin')
        .factory('UsersService', ['$http', '$q', 'ServerURL', function ($http, $q, ServerURL) {
            return {
                setPassword: function (data) {
                    var url = ServerURL + 'users/setpassword';
                    var deferred = $q.defer();
                    $http({
                        method: 'POST',
                        url: url,
                        headers: {'Content-Type': 'multipart/form-data'},
                        data: data
                    }).then(function (res) {
                        deferred.resolve(res);
                    }, function (err) {
                        deferred.reject(err);
                    });
                    return deferred.promise;
                },
                login: function (password) {
                    var url = ServerURL + 'users/login?password='+password;
                    var deferred = $q.defer();
                    $http.get(url).then(function (res) {
                        deferred.resolve(res);
                    }, function (err) {
                        deferred.reject(err);
                    });
                    return deferred.promise;
                }
            };
        }]);
})();