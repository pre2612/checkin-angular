/**
 * Created by pborrawar on 7/31/15.
 */
'use strict';
//this is global controller for entire our app
angular.module('checkinAngularApp').controller('MainController', function ($scope, Auth, User, $window) {

    $scope.ifLoggedIn = false; //var to check if user is logged in or not
    $scope.users = User; //user list
    $scope.email = '';

    Auth.$onAuth(function(authUser) {
        if(authUser !== null) {
            $scope.ifLoggedIn = true; // once logegd in set true
            $scope.loginText = 'Logout';
            $scope.email = authUser.password.email; //get email from users list for logged in user
        }
    }); //login

    $scope.logout = function () {
        $scope.ifLoggedIn = false; // set logged in var to false to hide nav and username var
        Auth.$unauth(); // unauth user
        $window.location.reload(); // reload to show login view
    };

});