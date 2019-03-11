function Bike(){
  this.status = 'Working';
};

Bike.prototype.working = function (status) {
  status = status.toLowerCase()

  if (status === 'y'){
    this.status = 'Working'
  } else if (status === 'n'){
    this.status = 'Not working'
  } else {
    throw new Error('Invalid input')
  };
  return this.status
};
