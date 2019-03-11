describe('Bike', function(){
  var bike

  beforeEach(function() {
    bike = new Bike();
  });

  it('creates a new bike', function(){
    expect(bike).toBeDefined()
  });

  it('checks if the bike is working', function(){
    bike.working('Y');
    expect(bike.status).toBe('Working');
  });

  it('checks the bike status', function(){
    bike.working('N');
    expect(bike.status).toBe('Not working')
  });

  it('thrown an error if invalid input', function(){
    expect(function() {
      bike.working('c')
    }).toThrowError('Invalid input')
  });


});
