/**
 * Created by pborrawar on 7/27/15.
 */
'use strict';
/*global Firebase */
angular.module('checkinAngularApp').factory('Auth', function ($firebaseAuth, FIREBASE_URL) {
    var ref = new Firebase(FIREBASE_URL);
    return $firebaseAuth(ref);// return firebase auth to see if user is logged in or not
});