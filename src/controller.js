(function exportController() {
  function Controller(ship) {
    this.ship = ship;

    this.initialiseSea();

    document.querySelector("#sailbutton").addEventListener("click", () => {
      this.setSail();
    });
  }

  Controller.prototype.renderDisplay = function renderDisplay() {
    const ship = this.ship;

    const currentPort = document.createTextNode(ship.currentPort.name);
    document.getElementById("displayOne").appendChild(currentPort);

    const currentPortIndex = ship.itinerary.ports.indexOf(ship.currentPort);
    const nextPortIndex = currentPortIndex + 1;
    const nextPort = document.createTextNode(
      ship.itinerary.ports[nextPortIndex].name
    );
    document.getElementById("displayTwo").appendChild(nextPort);
  };

  Controller.prototype.initialiseSea = function initialiseSea() {
    const backgrounds = ["./images/water0.png", "./images/water1.png"];
    let backgroundIndex = 0;
    window.setInterval(() => {
      document.querySelector("#viewport").style.backgroundImage = `url('${
        backgrounds[backgroundIndex % backgrounds.length]
      }')`;
      backgroundIndex += 1;
    }, 1000);
  };

  Controller.prototype.renderPorts = function renderPorts(ports) {
    const portsElement = document.querySelector("#ports");
    portsElement.style.width = "0px";

    ports.forEach((port, index) => {
      const newPortElement = document.createElement("div");
      newPortElement.dataset.portName = port.name;
      newPortElement.dataset.portIndex = index;
      newPortElement.className = "port";

      portsElement.appendChild(newPortElement);
      const portsElementWidth = parseInt(portsElement.style.width, 10);
      portsElement.style.width = `${portsElementWidth + 256}px`;
    });
  };

  Controller.prototype.renderShip = function renderShip() {
    const ship = this.ship;

    const shipPortIndex = ship.itinerary.ports.indexOf(ship.currentPort);
    const portElement = document.querySelector(
      `[data-port-index="${shipPortIndex}"]`
    );
    const shipElement = document.querySelector("#ship");
    shipElement.style.top = `${portElement.offsetTop + 32}px`;
    shipElement.style.left = `${portElement.offsetLeft - 32}px`;
  };

  Controller.prototype.setSail = function setSail() {
    const ship = this.ship;

    const currentPortIndex = ship.itinerary.ports.indexOf(ship.currentPort);
    const nextPortIndex = currentPortIndex + 1;
    const nextPortElement = document.querySelector(
      `[data-port-index="${nextPortIndex}"]`
    );

    const shipElement = document.querySelector("#ship");
    const sailInterval = setInterval(() => {
      const shipLeft = parseInt(shipElement.style.left, 10);
      if (shipLeft === nextPortElement.offsetLeft - 32) {
        ship.setSail();
        ship.dock();

        document.getElementById(
          "displayOne"
        ).textContent = `Current Port: ${ship.currentPort.name}`;

        const currentPortIndex = ship.itinerary.ports.indexOf(ship.currentPort);
        const nextPortIndex = currentPortIndex + 1;

        document.getElementById(
          "displayTwo"
        ).textContent = `Next Port:${ship.itinerary.ports[nextPortIndex].name}`;

        clearInterval(sailInterval);
      }

      shipElement.style.left = `${shipLeft + 1}px`;
    }, 20);

    if (!nextPortElement) {
      return alert("End of the line!");
    }
  };

  if (typeof module !== "undefined" && module.exports) {
    module.exports = Controller;
  } else {
    window.Controller = Controller;
  }
})();
