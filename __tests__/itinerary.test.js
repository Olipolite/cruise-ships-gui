const Itinerary = require("../src/itinerary");
const Port = require("../src/port");

describe("constructorItinerary", () => {
  it("returns an object of Itinerary", () => {
    expect(new Itinerary()).toBeInstanceOf(Object);
  });

  it("Itinerary has a ports property", () => {
    const stockholm = new Port("Stockholm");
    const helsinki = new Port("Helsinki");

    const itinerary = new Itinerary([stockholm, helsinki]);

    expect(itinerary.ports).toEqual([stockholm, helsinki]);
  });
});
