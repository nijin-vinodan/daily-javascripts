const odds = [1, 3, 5, 7];
const evens = [2, 4, 6, 8];

const numA = [odds, evens];
const numB = [...odds, ...evens];
const numC = numA.flat();

console.log(numA);
console.log(numB);
console.log(numC);

// What's the Output?