describe('Location.Ctrl', function(){
    var scope, ctrl, LocationsMock;

    // load the controller's module
    beforeEach(module('barcodescanner.controllers'));

    beforeEach(function(){
        LocationsMock = jasmine.createSpyObj('locations', ['all']);
        inject(function($rootScope, $controller) {
        scope = $rootScope.$new();
        ctrl = $controller('LocationCtrl', {$scope: scope, Locations: LocationsMock});
        })
    });

    // tests start here
    it('should initialize locations', function(){
        expect(LocationsMock.all).toHaveBeenCalled();
    });
});