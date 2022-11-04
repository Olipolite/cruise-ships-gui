const Port = require("../src/port");
const Ship = require("../src/ships")
const Itinerary = require("../src/itinerary")

describe("constructorPort", () => {
  it("returns the object port", () => {
    expect(new Port()).toBeInstanceOf(Object);
  });

  it("returns the name of the port", () => {
    const port = new Port("Helsinki");

    expect(port.name).toEqual("Helsinki");
  });
});

describe("Port methods ",() => {
  it("adds ships to Port", () => {
    const port = new Port("Stockholm");
    const ship = {};
    const knark = {};

    port.addShip(ship);
    port.addShip(knark);

    expect(port.ships).toContain(ship, knark);
  })

  it("remove ships from Port", () => {
    const port = new Port("Stockholm");
    const titanic = {};
    const queenMary = {};

    port.addShip(titanic);
    port.addShip(queenMary);
    port.removeShip(queenMary);

    expect(port.ships).toEqual([titanic]);
  })
});
