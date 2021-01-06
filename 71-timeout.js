function sayHello() {
    console.log("Hello");
}

// Case 1
setTimeout(sayHello(), 2000);

// Case 2
setTimeout(sayHello, 2000);

// What is the Output?