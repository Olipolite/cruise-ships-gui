const ship = new Ship("shipTom");

function Ship(name) {
  this.name = name;
  this.startingPort = "Stockholm";
}

Ship.prototype.setSail = function () {
  return (this.startingPort = false);
};
//class Ship {
//constructor(name) {
//this.name = name;
//this.startingPort = "Stockholm";
//}
//}

module.exports = Ship;
