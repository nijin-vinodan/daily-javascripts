let planet = {};

Object.defineProperty(planet, "name", {
    value: "Earth",
    writable: false
});

console.log(planet.name);

planet.name = "Mars";

console.log(planet.name);

// What is the Output?