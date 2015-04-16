describe('Locations', function(){
    var Locations;
    beforeEach(module('barcodescanner.services'));

    beforeEach(inject(function (_Locations_) {
        Locations = _Locations_;
    }));

    it('can get an instance of my factory', inject(function(Locations) {
        expect(Locations).toBeDefined();
    }));

    // it('has 5 chats', inject(function(Locations) {
    //     expect(Locations.all().length).toEqual(5);
    // }));

    // it('has Max as friend with id 1', inject(function(Locations) {
    //     var oneFriend = {
    //         id: 1,
    //         name: 'Max Lynx',
    //         notes: 'Odd obsession with everything',
    //         face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
    //     };

    //     expect(Locations.get(1).name).toEqual(oneFriend.name);
    // }));
});