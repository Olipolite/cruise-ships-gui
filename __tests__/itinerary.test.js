const Itinerary = require("../src/itinerary");

describe("constructorItinerary", () => {
  it("returns an object of Itinerary", () => {
    expect(new Itinerary()).toBeInstanceOf(Object);
  });

  it("can have ports", () => {
    const stockholm = jest.fn();
    const helsinki = jest.fn();

    const itinerary = new Itinerary([stockholm, helsinki]);

    expect(itinerary.ports).toEqual([stockholm, helsinki]);
  });
});
