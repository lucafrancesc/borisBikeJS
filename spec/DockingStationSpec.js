describe('DockingStation', function(){
  var station

  beforeEach(function() {
    station = new DockingStation();
  });

  it('creates a new station', function(){
    expect(station).toBeDefined()
  });

  it('release a bike', function(){
    var bike
    expect(station.releaseBike(bike)).toEqual(bike)
  });


})
