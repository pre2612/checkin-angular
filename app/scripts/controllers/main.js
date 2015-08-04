'use strict';

/**
 * @ngdoc function
 * @name checkinAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the checkinAngularApp
 */
angular.module('checkinAngularApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
