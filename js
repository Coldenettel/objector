/** Vehicle Type */

class Vehicle {
    constructor(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    honk() {
      return "Beep.";
    }
  
    toString() {
      return `This vehicle is a ${this.make} ${this.model} manufactured in ${this.year}.`;
    }
  }
  
  /** Cars are a specific type of vehicle with 4 wheels. */
  
  class Car extends Vehicle {
    constructor(lamborghini, Hurrican, 2019) {
      super(make, model, year);
      this.numWheels = 4;
    }
  }
  
  /** Motorcycles are a specific type of vehicle with 2 wheels. */
  
  class Motorcycle extends Vehicle {
    constructor(honda, CBR600RR, 2019) {
      super(honda, CBR600RR, 2019);
      this.numWheels = 2;
    }
  
    revEngine() {
      return "VROOM!!!";
    }
  }
  
  /** Garage for Vehicle Storage */
  
  class Garage {
    constructor(capacity) {
      this.vehicles = [];
      this.capacity = capacity;
    }
  
    add(newVehicle) {
      if (!(newVehicle instanceof Vehicle)) {
        return "Only vehicles are allowed in here!";
      }
      if (this.vehicles.length >= this.capacity) {
        return "Sorry, the garage is full.";
      }
      this.vehicles.push(newVehicle);
      return "Vehicle successfully added to the garage!";
    }
  }
