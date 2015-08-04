/**
 * Created by pborrawar on 7/24/15.
 */
angular.module('checkinAngularApp').factory('Device', function ($firebaseArray, FIREBASE_URL) {
    var ref = new Firebase(FIREBASE_URL+"devices/"),
        devices = $firebaseArray(ref);
    return {
        all: devices,
        create: function (device) {
            return devices.$add(device);
        },
        get: function (deviceId) {
            return $firebaseArray(ref.child(deviceId));
        },
        delete: function (device) {
            console.log(device);
            return devices.$remove(device);
        }
    };
});