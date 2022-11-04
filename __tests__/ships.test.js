const Ship = require("../src/ships");
const Port = require("../src/port");
const Itinerary = require("../src/itinerary");

describe("constructor", () => {
  it("returns an object", () => {
    const port = new Port("Stockholm");
    const itinerary = new Itinerary([port]);
    const ship = new Ship(itinerary);

    expect(ship).toBeInstanceOf(Object);
  });

  it("gets added to port on instantiation", () => {
    const stockholm = new Port("Stockholm");
    const itinerary = new Itinerary([stockholm]);
    const ship = new Ship(itinerary);

    expect(stockholm.ships).toContain(ship);
  })

  it("a starting port for the ship", () => {
    const port = new Port("Stockholm");
    const itinerary = new Itinerary([port]);
    const ship = new Ship(itinerary);

    expect(ship.currentPort).toBe(port);
  });

  it("sets sail from currentPort", () => {
    const stockholm = new Port("Stockholm");
    const helsinki = new Port("Helsinki");
    const itinerary = new Itinerary([stockholm, helsinki]);
    const ship = new Ship(itinerary);

    ship.setSail();

    expect(ship.currentPort).toBeFalsy();
    expect(stockholm.ships).not.toContain(ship);
  });

  it("can dock at a different port", () => {
    const stockholm = new Port("Stockholm");
    const helsinki = new Port("Helsinki");
    const itinerary = new Itinerary([stockholm, helsinki]);
    const ship = new Ship(itinerary);

    ship.setSail();
    ship.dock();

    expect(ship.currentPort).toBe(helsinki);
    expect(helsinki.ships).toContain(ship);
  });

  it("throws error if sails further than its itinerary", () => {
    const stockholm = new Port("Stockholm");
    const helsinki = new Port("Helsinki");
    const itinerary = new Itinerary([stockholm, helsinki]);
    const ship = new Ship(itinerary);

    ship.setSail();
    ship.dock();

    expect(() => ship.setSail()).toThrowError("End of itinerary reached");
  });
});
