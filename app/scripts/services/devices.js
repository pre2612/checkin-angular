/**
 * Created by pborrawar on 7/24/15.
 */
'use strict';
/*global Firebase */
angular.module('checkinAngularApp').factory('Device', function ($firebaseArray, FIREBASE_URL) {
    var ref = new Firebase(FIREBASE_URL+'devices/'),
        devices = $firebaseArray(ref);
    return {
        all: devices, // return all device list
        create: function (device) {// creates new device in device list
            return devices.$add(device);
        }
    };
});