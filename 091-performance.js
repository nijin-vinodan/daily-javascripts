function myFunc() {
    console.log("myFunc is running");
}

function anything() {
    const start = performance.now();
    myFunc();
    const end = performance.now();
    console.log(end - start);
}

function something() {
    const start = Date.now();
    myFunc();
    const end = Date.now();
    console.log(end - start);
}

// What are we trying to do within anything() and something(). Can you think of the difference?