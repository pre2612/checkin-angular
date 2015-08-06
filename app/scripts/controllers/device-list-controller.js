/**
 * Created by pborrawar on 7/24/15.
 */
'use strict';
/*global Firebase */
angular.module('checkinAngularApp').controller('DeviceListController', function ($scope, Device, currentAuth, FIREBASE_URL, $firebaseArray, $filter, $window, $q) {

    //get current date to pass on to checkin checkout arrays
    var date = new Date(),
        defer = $q.defer(); // create promise
        date = $filter('date')(date, 'dd-MM-yyyy');

    $scope.devices = Device.all; // get device list
    $scope.userEmail = currentAuth.password.email; //get email of logged in user
    $scope.btnText2 = 'Check-out';
    $scope.email = '';

    //on checkout click we have to add a checkout object in device list
    $scope.checkOut = function (device, index) {
        var ref = new Firebase(FIREBASE_URL+'/devices/'+index);
        $scope.checkout = $firebaseArray(ref.child('/checkOut'));
        $scope.checkout.$add({
            date: date, // get current date
            email: currentAuth.password.email, //get users email
            device: device.name // get device name
        });
    };

    //on checkin click we have to add a checkin object in device list and remove checkout
    $scope.checkIn = function (device, index, deviceId) {
        var ifRequest = true;
        defer.promise.then(function () {
            angular.forEach($scope.devices, function(device) {
                var id = device.$id;
                angular.forEach(device.checkOut, function(checkout) {
                    if($scope.userEmail !== checkout.email) {
                        if(deviceId === id) {
                            $scope.request(device);
                            ifRequest = false;
                            return;
                        }
                    }
                });
            });

        }).then(function () {
            if (ifRequest) {
                var ref = new Firebase(FIREBASE_URL+'/devices/'+index),
                    checkoutref = new Firebase(FIREBASE_URL+'/devices/'+index+'/checkOut');
                checkoutref.remove();
                $scope.checkin = $firebaseArray(ref.child('/checkIn'));
                $scope.checkin.$add({
                    date: date,
                    email: currentAuth.password.email,
                    device: device.name
                });
            }
        });
        defer.resolve();
    };

    //set text to request if loggedin user email matches checked out user email or text has to be check-in
    $scope.setText = function (deviceId) {
        var text = 'Check-In',
            id;
        angular.forEach($scope.devices, function(device) {
            id = device.$id;
            angular.forEach(device.checkOut, function(checkout) {
                if($scope.userEmail !== checkout.email) {
                   if(deviceId === id) {
                        text = 'Request';
                   }
                }
            });
        });
        return text;
    };

    //request device from the checked out user by sending email
    $scope.request = function (device) {
        $window.location = 'mailto:'+ $scope.email+'?subject=Device Request&body=Hi I need '+device.name+' after you are done!';
    };

});


