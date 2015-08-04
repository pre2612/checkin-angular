/**
 * Created by pborrawar on 7/24/15.
 */
angular.module('checkinAngularApp').controller('CheckedInController', function ($scope, Device) {
    $scope.device = Device.all;
});