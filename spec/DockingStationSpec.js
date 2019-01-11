describe('DockingStation', function(){
  var station;

  beforeEach(function() {
    bike = jasmine.createSpy('bike');
    station = new DockingStation();
  });

  it('creates a new station', function(){
    expect(station).toBeDefined();
  });

  it('release a bike', function(){
    station.dockBike(bike)
    expect(station.releaseBike()).toEqual(bike);
  });

  it('raises an error if no bike docked', function(){
    expect(function(){
      station.releaseBike()
    }).toThrowError('No bikes!');
  });

  it('docks a bike', function(){
    expect(station.dockBike(bike)).toEqual(bike);
  });

  it('raises an error if the station is full', function(){
    for (var i = 0; i < 20; i++) {
      station.dockBike(bike);
    };
    expect(function() {
      station.dockBike(bike)
    }).toThrowError('This station is full!');
  });
})
