function sayHi(name) {
    console.log(arguments);
}

const sayHello = (name) => {
    console.log(arguments);
}

sayHi("John");
sayHello("Sandra");

// What's the Output?