const Ship = require("../src/ships");
const Port = require("../src/port");

describe("constructor", () => {
  it("returns an object", () => {
    expect(new Ship()).toBeInstanceOf(Object);
  });

  it("a starting point for the ship", () => {
    const port = new Port("Stockholm");
    const ship = new Ship(port);

    expect(ship.currentPort).toBe(port);
  });

  it("sets sail from currentPort", () => {
    const port = new Port("Stockholm");
    const ship = new Ship(port);

    ship.setSail();

    expect(ship.currentPort).toBeFalsy();
  });

  it("can dock at a different port", () => {
    const stockholm = new Port("Stockholm");
    const ship = new Ship(stockholm);

    const helsinki = new Port("Helsinki");
    ship.dock(helsinki);

    expect(ship.currentPort).toBe(helsinki);
  });
});
