'use strict';

angular.module('app.admin').controller('ContactUsController', function ($scope, $timeout, ContactUsService, $filter, MailboxService) {
    $scope.tableData = $scope.safeData = [];
    $scope.currRow = {};
    $scope.loading = true;
    $scope.email = {
        subject: '',
        message: ''
    };

    $scope.getData = function () {
        $scope.loading = true;

        ContactUsService.get().then(function (response) {
            $scope.tableData = $scope.safeData = response.data;
            $scope.loading = false;
        });
    };
    $scope.getData();

    $scope.deleteRow = function (rowId, rowInd) {
        if (confirm('Are you sure want to delete this?')) {
            $scope.loading = true;
            ContactUsService.delete(rowId).then(function () {
                //$scope.getData();
                $scope.tableData.splice(rowInd, 1);
                $scope.loading = false;
            });
        }
    };

    $scope.checkAll = function () {
        angular.forEach($scope.tableData, function (val) {
            val.checked = $scope.allCheck;
        })
    };

    $scope.getCheckedEmails = function () {
        var emails = [];
        angular.forEach($filter('filter')($scope.tableData, {checked: true}), function (val) {
            emails[emails.length] = val.email;
        });
        return emails;
    };

    $scope.initMail = function () {
        $scope.email.subject = '';
        $scope.email.message = '';
    };

    $scope.sendMail = function () {
        $scope.loading = true;
        var data = {
            to_emails: $scope.getCheckedEmails(),
            from_email: MailboxService.supportEmail,
            subject: $scope.email.subject,
            message: $scope.email.message,
            mail_flag: 'contactus'
        };
        MailboxService.post(data).then(function () {
            $('#myModal').modal('hide');
            $scope.loading = false;
            //$scope.getData();
        }, function(){
            $scope.loading = false;
        });
    };
});