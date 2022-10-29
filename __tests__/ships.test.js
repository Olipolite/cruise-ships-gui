const Ship = require("../src/ships");
const Port = require("../src/port");

describe("constructor", () => {
  it("returns an object", () => {
    expect(new Ship()).toBeInstanceOf(Object);
  });

  it("a starting point for the ship", () => {
    const port = new Port("Stockholm");
    const ship = new Ship();

    expect(ship.currentPort).toBe(port);
  });

  it("sets sail from currentPort", () => {
    const ship = new Ship();

    ship.setSail();

    expect(ship.currentPort).toBeFalsy();
  });
});
