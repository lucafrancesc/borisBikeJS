function Bike(){
  this.status = 'Working';
};

Bike.prototype.working = function (status) {
  if (status === 'Y' ){
    this.status = 'Working'
  } else if (status === 'N' ){
    this.status = 'Not working'
  };
  return this.status
};
