// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('barcodescanner', [
  'ionic', 
  'barcodescanner.services',
  'barcodescanner.controllers']
)

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('locations', {
    url: '/locations',
    templateUrl: 'templates/locations.html',
    controller: 'LocationCtrl'
  })
  .state('locations.inventory', {
    url: '/locations/:locationId',
    templateUrl: 'templates/inventory.html'
  })
  .state('locations.inventory.item-details', {
    url: '/locations/:locationId/inventory/:itemId',
    templateUrl: 'item-details.html'
  })
  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html'
  });
  $urlRouterProvider.otherwise('/locations')
});