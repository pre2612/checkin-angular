'use strict';

/**
 * @ngdoc overview
 * @name checkinAngularApp
 * @description
 * # checkinAngularApp
 *
 * Main module of the application.
 */
angular
  .module('checkinAngularApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase'
  ]).constant('FIREBASE_URL', 'https://checkin--angular.firebaseio.com/');
