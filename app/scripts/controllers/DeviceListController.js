/**
 * Created by pborrawar on 7/24/15.
 */
angular.module('checkinAngularApp').controller('DeviceListController', function ($scope, Device, Auth, currentAuth, FIREBASE_URL, $firebaseArray, $filter, $window) {

    //get current date to pass on to checkin checkout arrays
    var date = new Date();
    date = $filter('date')(date, 'dd-MM-yyyy');


    $scope.devices = Device.all;
    $scope.userEmail = currentAuth.password.email;
    $scope.requestDevice = false;
    $scope.btnText = "Check-In";
    $scope.btnText2 = "Check-out";
    $scope.email = "";

    //checkout click add the device nme email and current date to the checkout object
    $scope.checkOut = function (device, index) {
        var ref = new Firebase(FIREBASE_URL+"/devices/"+index);
        $scope.checkOut = $firebaseArray(ref.child("/checkOut"));
        $scope.checkOut.$add({
            date: date,
            email: currentAuth.password.email,
            device: device.name
        });
    };

    //checkin click add the device nme email and current date to the checin object
    $scope.checkIn = function (device, index) {

        if($scope.requestDevice) {
            $scope.request(device);
        } else {
            var ref = new Firebase(FIREBASE_URL+"/devices/"+index),
                checkoutref = new Firebase(FIREBASE_URL+"/devices/"+index+"/checkOut");
            checkoutref.remove();
            $scope.checkIn = $firebaseArray(ref.child("/checkIn"));
            $scope.checkIn.$add({
                date: date,
                email: currentAuth.password.email,
                device: device.name
            });

        }

    };

    //get the email of the checkout object and compare with logged in email to decide whether to show "request" or "check-in" btn
    $scope.getEmail = function (email) {
        $scope.email = email;
        console.log($scope.userEmail);
        console.log(email);
        if($scope.userEmail != email) {
            $scope.requestDevice = true;
            $scope.btnText = "Request";
        }
    };

    //request device from the checked out user by sending email
    $scope.request = function (device) {
        $window.location = 'mailto:'+ $scope.email+'?subject=Device Request&body=Hi I need '+device.name+' after you are done!';
    };
});


