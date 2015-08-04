/**
 * Created by pborrawar on 7/24/15.
 */
angular.module('checkinAngularApp').controller('DeviceListController', function ($scope, Device, Auth, currentAuth, FIREBASE_URL, $firebaseArray, $filter, $window, $q) {

    //get current date to pass on to checkin checkout arrays
    var date = new Date(),
        defer = $q.defer();
        date = $filter('date')(date, 'dd-MM-yyyy');


    $scope.devices = Device.all;
    $scope.userEmail = currentAuth.password.email;
    $scope.requestDevice = false;
    $scope.btnText2 = "Check-out";
    $scope.email = "";



    //checkout click add the device nme email and current date to the checkout object
    $scope.checkOut = function (device, index) {
        var ref = new Firebase(FIREBASE_URL+"/devices/"+index);
        $scope.checkout = $firebaseArray(ref.child("/checkOut"));
        $scope.checkout.$add({
            date: date,
            email: currentAuth.password.email,
            device: device.name
        });
    };

    //checkin click add the device nme email and current date to the checin object
    $scope.checkIn = function (device, index, deviceId) {
        var ifRequest = true;
        defer.promise.then(function () {
            angular.forEach($scope.devices, function(device) {
                var id = device.$id;
                angular.forEach(device.checkOut, function(checkout) {
                    if($scope.userEmail != checkout.email) {
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
                var ref = new Firebase(FIREBASE_URL+"/devices/"+index),
                    checkoutref = new Firebase(FIREBASE_URL+"/devices/"+index+"/checkOut");
                checkoutref.remove();
                $scope.checkin = $firebaseArray(ref.child("/checkIn"));
                $scope.checkin.$add({
                    date: date,
                    email: currentAuth.password.email,
                    device: device.name
                });
            }
        });

        defer.resolve();

    };


    $scope.setText = function (deviceId) {
        var text = "Check-In",
            id;
        angular.forEach($scope.devices, function(device) {
            var id = device.$id;
            angular.forEach(device.checkOut, function(checkout) {
                if($scope.userEmail != checkout.email) {
                   if(deviceId === id) {
                        text = "Request";
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


