/**
 * Created by pborrawar on 7/24/15.
 */
//nav directive to do regex to get utl
angular.module('checkinAngularApp').directive('checkNav', function () {
    return {
        replace: true,
        restrict: 'E',
        templateUrl: '../../views/directives/checkNav.html',
        controller: function ($scope, $location) {
            $scope.isPage = function (name) {
                return new RegExp("/" + name + "($|/)").test($location.path());
            }
        }
    }
});