angular.module('barcodescanner.services', [])
.factory('Locations', function(){
  var locations;
  locations = [
    {
      id: 0,
      name: 'LocationA',
      inventory: []
    }, {
      id: 1,
      name: 'LocationB',
      inventory: []
    }, {
      id: 2,
      name: 'LocationC',
      inventory: []
    }, {
      id: 3,
      name: 'LocationD',
      inventory: []
    }, {
      id: 4,
      name: 'LocationE',
      inventory: []
    }
  ];
  return {
    all: function() {
      var locationsString = window.localStorage['locations'];
      if(locationsString) {
        return angular.fromJson(locationString);
      }else{
        return locations;
      }
      return [];
    },
    save: function(locations) {
      window.localStorage['locations'] = angular.toJson(locations);
    },
    newLocation: function(locationTitle) {
      // Add a new location
      return {
        title: locationTitle,
        inventory: []
      };
    },
    getInventory: function(locationId) {
      var i;
      i = 0;
      while (i < locations.length) {
        if (locations[i].id === parseInt(locationId)) {
          return locations[i].inventory;
        }
        i++;
      }
      return null;
    }
  }
});