function Ship(name, port) {
  this.name = name;
  this.currentPort = port;
}

Ship.prototype.setSail = function () {
  return (this.currentPort = false);
};

module.exports = Ship;
