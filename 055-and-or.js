const zero = 0,
    one = 1,
    two = 2,
    three = 3;

console.log(one || two || three);
console.log(one && two && three);
console.log(one && two || three);
console.log(zero || one || two);

// What's the output?