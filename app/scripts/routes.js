'use strict';
//we have look for routechange and redirect to login page if anot authenticated
angular.module('checkinAngularApp').run(['$rootScope', '$location', function($rootScope, $location) {
    $rootScope.$on('$routeChangeError', function(event, next, previous, error) {
        // We can catch the error thrown when the $requireAuth promise is rejected
        // and redirect the user back to the home page
        if (error === 'AUTH_REQUIRED') {
            $location.path('/');
        }
    });
}]);

//routes
angular.module('checkinAngularApp').config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/login-form.html',
            controller: 'LoginFormController',
            resolve: {
                // controller will not be loaded until $waitForAuth resolves
                // Auth refers to our $firebaseAuth
                'currentAuth': ['Auth', function(Auth) {
                    // $waitForAuth returns a promise so the resolve waits for it to complete
                    return Auth.$waitForAuth();
                }]
            }
        })
        .when('/login', {
            templateUrl: 'views/login-form.html',
            controller: 'LoginFormController',
            resolve: {
                // controller will not be loaded until $waitForAuth resolves
                // Auth refers to our $firebaseAuth
                'currentAuth': ['Auth', function(Auth) {
                    // $waitForAuth returns a promise so the resolve waits for it to complete
                    return Auth.$waitForAuth();
                }]
            }
        })
        .when('/devices', {
            templateUrl: 'views/device-list.html',
            controller: 'DeviceListController',
            resolve: {
                // controller will not be loaded until $requireAuth resolves
                // Auth refers to our $firebaseAuth
                'currentAuth': ['Auth', function(Auth) {
                    // $requireAuth returns a promise so the resolve waits for it to complete
                    // If the promise is rejected, it will throw a $stateChangeError
                    return Auth.$requireAuth();
                }]
            }
        })
        .when('/add-device', {
            templateUrl: 'views/add-device.html',
            controller: 'AddDeviceController',
            resolve: {
                // controller will not be loaded until $requireAuth resolves
                // Auth refers to our $firebaseAuth
                'currentAuth': ['Auth', function(Auth) {
                    // $requireAuth returns a promise so the resolve waits for it to complete
                    // If the promise is rejected, it will throw a $stateChangeError
                    return Auth.$requireAuth();
                }]
            }
        })
        .when('/device/:id', {
            templateUrl: 'views/remove-device.html',
            controller: 'RemoveDeviceController',
            resolve: {
                // controller will not be loaded until $requireAuth resolves
                // Auth refers to our $firebaseAuth
                'currentAuth': ['Auth', function(Auth) {
                    // $requireAuth returns a promise so the resolve waits for it to complete
                    // If the promise is rejected, it will throw a $stateChangeError
                    return Auth.$requireAuth();
                }]
            }
        })
        .when('/checked-out', {
            templateUrl: 'views/checked-out.html',
            controller: 'CheckedOutController',
            resolve: {
                // controller will not be loaded until $requireAuth resolves
                // Auth refers to our $firebaseAuth
                'currentAuth': ['Auth', function(Auth) {
                    // $requireAuth returns a promise so the resolve waits for it to complete
                    // If the promise is rejected, it will throw a $stateChangeError
                    return Auth.$requireAuth();
                }]
            }
        })
        .when('/checked-in', {
            templateUrl: 'views/checked-in.html',
            controller: 'CheckedInController',
            resolve: {
                // controller will not be loaded until $requireAuth resolves
                // Auth refers to our $firebaseAuth
                'currentAuth': ['Auth', function(Auth) {
                    // $requireAuth returns a promise so the resolve waits for it to complete
                    // If the promise is rejected, it will throw a $stateChangeError
                    return Auth.$requireAuth();
                }]
            }
        })
        .otherwise({
            redirectTo: '/'
        });
});




