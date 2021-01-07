class Vehicle {
    start() {

    }
}

class Shape {
    draw() {

    }
}

class Oval extends Shape {
    draw() {

    }
}

const circle = new Oval();

console.log(circle instanceof Vehicle);
console.log(circle instanceof Oval);
console.log(circle instanceof Shape);
console.log(circle instanceof Object);

// What's the Output?