function vehicle(name) {
    this.name = name;
}

const car = new vehicle("Car");
const jeep = new vehicle("Jeep");

vehicle.type = "automobile";

console.log(car.type);

// What is the Output?