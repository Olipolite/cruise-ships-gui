const Ship = require("../src/ships");

describe("constructor", () => {
  it("returns an object", () => {
    expect(new Ship("shipTom")).toBeInstanceOf(Object);
  });

  it("returns a starting point for the ship", () => {
    const ship = new Ship("shipTom");

    expect(ship.startingPort).toEqual("Stockholm");
  });

  it("sets sail from startingPort", () => {
    const ship = new Ship("shipTom");

    ship.setSail();

    expect(ship.startingPort).toBeFalsy();
  });
});
