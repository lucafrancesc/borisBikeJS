function DockingStation(capacity){
  this.capacity = 20;
  this.docking = [];
};

DockingStation.prototype.releaseBike = function () {
  if (this.docking.length === 0){
    throw new Error('No bikes!');
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
