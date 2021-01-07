let counter = 0;

function increment() {
    counter++;
    console.log(counter);
}

/**
 * The counter here as a problem.
 * It can be modified by any function as it is global by just assigning counter = N;
 * Can you write a closure function which will change the counter value only through the increment function.
 */