const Port = require("../src/port");
const Ship = require("../src/ships")
const Itinerary = require("../src/itinerary")

describe("Port name", () => {
  it("returns the name of the port", () => {
    const port = new Port("Helsinki");

    expect(port.name).toEqual("Helsinki");
  });
});

describe("Port methods ",() => {
  let port
  let titanic;
  let queenMary;
  beforeEach(() => {
    port = new Port("Stockholm")
    titanic = jest.fn();
    queenMary = jest.fn();
  });

  it("returns the object port", () => {
    expect(new Port()).toBeInstanceOf(Object);
  });

  it("adds ships to Port", () => {
    port.addShip(titanic);
    port.addShip(queenMary);
  
    expect(port.ships).toContain(titanic, queenMary);
  });
  

  it("remove ships from Port", () => {
    port.addShip(titanic);
    port.addShip(queenMary);
    port.removeShip(queenMary);

    expect(port.ships).toEqual([titanic]);
  });
});
