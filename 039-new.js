function vehicleA(name) {
    this.name = name;
}

const vehicleB = (name) => {
    this.name = name;
}

const honda = new vehicleA("Honda");
const hyundai = new vehicleB("Hyundai");

// What happens when honda and hyundai are instantiated?