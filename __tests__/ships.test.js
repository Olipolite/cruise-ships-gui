const Ship = require("../src/ships");
const Port = require("../src/port");
const Itinerary = require("../src/itinerary");

describe("Ship", () => {
  describe("with ports and an itinerary", () => {
    let ship;
    let stockholm;
    let helsinki;
    let itinerary;

    beforeEach(() => {
      stockholm = new Port("Stockholm");
      helsinki = new Port("Helsinki");
      itinerary = new Itinerary([stockholm, helsinki]);
      ship = new Ship(itinerary);
    });

    it("can be instantiated", () => {
      expect(ship).toBeInstanceOf(Object);
    });
  
    it("gets added to port on instantiation", () => {
      expect(stockholm.ships).toContain(ship);
    });
  
    it("has a starting port", () => {
      expect(ship.currentPort).toBe(stockholm);
    });
  
    it("sets sail from currentPort", () => {
      ship.setSail();
  
      expect(ship.currentPort).toBeFalsy();
      expect(stockholm.ships).not.toContain(ship);
    });
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
  