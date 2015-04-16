angular.module('barcodescanner.controllers', [])

.controller('LocationCtrl', function($scope, Locations) {
  $scope.locations = Locations.all();
})

.controller('LoginCtrl', function($scope) {
})

