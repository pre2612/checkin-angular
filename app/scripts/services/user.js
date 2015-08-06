/**
 * Created by pborrawar on 7/24/15.
 */
'use strict';
/*global Firebase */
angular.module('checkinAngularApp').factory('User', function ($firebaseArray, FIREBASE_URL) {
    var ref = new Firebase(FIREBASE_URL+'users/');
    return $firebaseArray(ref);// return user list
});