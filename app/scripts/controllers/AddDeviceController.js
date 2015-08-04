/**
 * Created by pborrawar on 7/24/15.
 */
angular.module('checkinAngularApp').controller('AddDeviceController', function ($scope, Device, $location) {
    //add device to the list and redirect page to device list page
    $scope.addDevice = function (device) {
        Device.create(device).then(function () {
            $location.path("/devices");
        });
    };
});