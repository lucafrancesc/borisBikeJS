function DockingStation(capacity){
  this.capacity = 20;
  this.docking = [];
};

DockingStation.prototype.releaseBike = function () {
  var workingBikes = []
  if (this.docking.length === 0){
    throw new Error('No bikes!');
    return
  }else{
    for (var i = 0; i < this.docking.length; i++){
      if(this.docking[i].status === 'Working'){
        workingBikes.push(this.docking[i])
        this.docking.splice(i, 1)
      }
    }
  }
  if(workingBikes.length > 0){
    return workingBikes.pop()
  }else{
    throw new Error ('No working bikes')
  }
};

DockingStation.prototype.dockBike = function (bike) {
  if (this.docking.length === this.capacity){
    throw new Error('This station is full!');
  } else {
    this.docking.push(bike);
    return bike;
  }
}
