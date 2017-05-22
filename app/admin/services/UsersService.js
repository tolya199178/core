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
                }
            };
        }]);
})();