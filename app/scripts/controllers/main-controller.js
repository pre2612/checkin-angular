/**
 * Created by pborrawar on 7/31/15.
 */
'use strict';
//this is global controller for entire our app
angular.module('checkinAngularApp').controller('MainController', function ($scope, Auth, User, $window) {
    $scope.ifLoggedIn = false;
    $scope.users = User;
    $scope.email = '';

    Auth.$onAuth(function(authUser) {
        if(authUser !== null) {
            $scope.ifLoggedIn = true;
            $scope.loginText = 'Logout';
            $scope.email = authUser.password.email;
        }
    }); //login

    $scope.logout = function () {
        $scope.ifLoggedIn = false;
        Auth.$unauth();
        $window.location.reload();
    };

});