const flight = {
    name: "Air Canada",
    type: "Air Bus",
    takeOff: function () {
        console.log("Taking Off");
    },
    manufactureYear: undefined,
    engines: 4
};

const obj = JSON.stringify(flight);
console.log(obj);

// What's the Output?