const strA = "He is what he is or he was";

const strB = strA.replace("he", "she");

const strC = strA.replace(/he/g, "she");

const strD = strA.replace(/he/gi, "she");

console.log(strB);
console.log(strC);
console.log(strD);

// What's the Output?