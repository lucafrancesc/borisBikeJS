describe('Bike', function(){
  var bike

  beforeEach(function() {
    bike = new Bike();
  });

  it('creates a new bike', function(){
    expect(bike).toBeDefined()
  });

  it('checks if the bike is working', function(){
    expect(bike.working()).toBe(true)
  });
});
