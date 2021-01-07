const multiply = (base) => {
    return (num) => {
        return base * num;
    }
};

const mulBy5 = multiply(5);
console.log(mulBy5(4));

const mulBy7 = multiply(7);
console.log(mulBy7(2));

// What's the output and what are we trying to do here?