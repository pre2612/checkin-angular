'use strict';

/**
 * @ngdoc function
 * @name checkinAngularApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the checkinAngularApp
 */
angular.module('checkinAngularApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
