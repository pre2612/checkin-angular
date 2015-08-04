/**
 * Created by pborrawar on 7/27/15.
 */
angular.module('checkinAngularApp').controller('LoginFormController', function ($scope, $location, Auth) {
    $scope.login = function(){
        Auth.$onAuth(function(authData) {
            $scope.authData = authData;
        });

        Auth.$authWithPassword({
            email: $scope.email,
            password: $scope.password
        }).then(function(authData) {
            console.log("Logged in as:", authData.uid);
            $location.path('/devices');
        }).catch(function(error) {
            $scope.showMsg = true;
        });
    }
});