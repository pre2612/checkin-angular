/**
 * Created by pborrawar on 7/27/15.
 */
'use strict';
angular.module('checkinAngularApp').controller('LoginFormController', function ($scope, $location, Auth) {
    //On login click get email and password and pass it to authWithPwd to check if its valid credentails
    $scope.login = function(){
        Auth.$authWithPassword({
            email: $scope.email,
            password: $scope.password
        }).then(function(authData) {
            console.log(authData);
            $location.path('/devices');
        }).catch(function(error) {
            $scope.showMsg = true; //if wrong credentials show error msg
            $scope.errorMsg = error; // set error to true
        });
    };
});