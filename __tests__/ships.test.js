const Ship = require("../src/ships");


describe("Ship", () => {
  describe("with ports and an itinerary", () => {

    let stockholm;
    let helsinki;

    beforeEach(() => {
      stockholm = {
        addShip: jest.fn(),
        removeShip: jest.fn(),
        name: "Stockholm",
        ships: []
      };

      helsinki = {
        addShip: jest.fn(),
        removeShip: jest.fn(),
        name: "Helsinki",
        ships: []
      };

      itinerary = {
        ports: [stockholm, helsinki]
      };
      ship = new Ship(itinerary);
    });

    it("can be instantiated", () => {
      expect(ship).toBeInstanceOf(Object);
    });
  
    it("gets added to port on instantiation", () => {
      expect(stockholm.addShip).toHaveBeenCalledWith(ship);
    });
  
    it("has a starting port", () => {
      expect(ship.currentPort).toBe(stockholm);
    });
  
    it("can set sail", () => {

      ship.setSail();
  
      expect(ship.currentPort).toBeFalsy();
      expect(stockholm.removeShip).toHaveBeenCalledWith(ship);
    });

    it("can dock at a different port", () => {

      ship.setSail();
      ship.dock();
    
      expect(ship.currentPort).toBe(helsinki);
      expect(helsinki.addShip).toHaveBeenCalledWith(ship);
    });
    
    it("throws error if sails further than its itinerary", () => {

      ship.setSail();
      ship.dock();
    
      expect(() => ship.setSail()).toThrowError("End of itinerary reached");
    });
  });
});
  