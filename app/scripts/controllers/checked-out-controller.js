/**
 * Created by pborrawar on 7/24/15.
 */
'use strict';
angular.module('checkinAngularApp').controller('CheckedOutController', function ($scope, Device) {
    $scope.device = Device.all; //get device list
});