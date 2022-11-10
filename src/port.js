function Port(name) {
  this.name = name;
  this.ships = [];
}

Port.prototype.addShip = function (ship) {
  this.ships.push(ship);
};

Port.prototype.removeShip = function (ship) {
  const index = this.ships.indexOf(ship);
  this.ships.splice(index);
};

module.exports = Port;
