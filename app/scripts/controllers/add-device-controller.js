/**
 * Created by pborrawar on 7/24/15.
 */
'use strict';
angular.module('checkinAngularApp').controller('AddDeviceController', function ($scope, Device, $location) {
    //add device to the list and redirect page to device list page
    $scope.addDevice = function (device) {
        Device.create(device).then(function () {
            $location.path('/devices'); //once device is added redirect to device list page
        });
    };
});