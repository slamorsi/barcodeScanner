describe('Locations', function(){
  beforeEach(function(){
    browser.get("#/locations");
  });
  it('should have the title "Locations"', function(){
         var awesomeStatus = element(by.css('ion-view'));
         expect(awesomeStatus.getAttribute('view-title')).toContain('Locations');
  });
});