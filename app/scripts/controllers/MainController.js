/**
 * Created by pborrawar on 7/31/15.
 */
angular.module('checkinAngularApp').controller('MainController', function ($scope, $location, Auth, FIREBASE_URL, User, $window) {
    $scope.showLogout = false;
    $scope.users = User;
    $scope.email = "";

    Auth.$onAuth(function(authUser) {
        if(authUser != null) {
            $scope.showLogout = true;
            $scope.loginText = "Logout";
            $scope.email = authUser.password.email;
        }
    }); //login

    $scope.logout = function () {
        $scope.showLogout = false;
        Auth.$unauth();
        $window.location.reload();
    };


});