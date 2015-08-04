/**
 * Created by pborrawar on 7/27/15.
 */
angular.module('checkinAngularApp').factory('Auth', function ($firebaseAuth, FIREBASE_URL) {
    var ref = new Firebase(FIREBASE_URL);
    return $firebaseAuth(ref);
});