const numbers = [1, 2, 3, 4, 5];

const checkEven = num => num % 2 === 0;

const result = numbers.some(checkEven);

console.log(result);

// What's the output?