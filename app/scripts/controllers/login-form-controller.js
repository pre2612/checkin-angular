/**
 * Created by pborrawar on 7/27/15.
 */
'use strict';
angular.module('checkinAngularApp').controller('LoginFormController', function ($scope, $location, Auth) {
    $scope.login = function(){
        Auth.$authWithPassword({
            email: $scope.email,
            password: $scope.password
        }).then(function(authData) {
            console.log(authData);
            $location.path('/devices');
        }).catch(function(error) {
            $scope.showMsg = true;
            $scope.errorMsg = error;
        });
    };
});