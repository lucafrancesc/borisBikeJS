describe('DockingStation', function(){
  var station;
  var bike;

  beforeEach(function() {
    function BikeStub() {
      this.status = 'Working'
    }
      BikeStub.prototype = {
        working() {}
    };
    bike = new BikeStub();
    station = new DockingStation();
  });

  it('creates a new station', function(){
    expect(station).toBeDefined();
  });

  it('release a bike', function(){
    station.dockBike(bike)
    expect(station.releaseBike()).toEqual(Object({ status: 'Working' }))
  });

  it('won\'t release a broken bike', function(){
    bike.status = 'Not working'
    station.dockBike(bike)
    expect(function(){
      station.releaseBike()
    }).toThrowError('No working bikes');
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
});
