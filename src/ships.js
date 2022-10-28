const ship = new Ship("shipTom")

function Ship(name) {
    this.name = name;
    this.startingPort = "Stockholm";
};

module.exports = Ship;