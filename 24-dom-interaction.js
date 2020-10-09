const cars = ["Benz", "Audi", "Honda"];

const carsDiv = document.getElementById("cars");

// Solution A
for (let car of cars) {
    carsDiv.innerHTML += car;
}

// Solution B
let carsDisplay = '';
for (let car of cars) {
    carsDisplay += car;
}
carsDiv.innerHTML = carsDisplay;

// Which solution is better? A or B?