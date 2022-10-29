const Port = require("../src/port");

describe("constructorPort", () => {
  it("returns the object port", () => {
    expect(new Port()).toBeInstanceOf(Object);
  });

  it("returns the name of the port", () => {
    const port = new Port("Helsinki");

    expect(port.name).toEqual("Helsinki");
  });
});
