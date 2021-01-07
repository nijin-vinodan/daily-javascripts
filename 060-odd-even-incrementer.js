let evens = [2, 4, 6];
let odds = [1, 3, 5];

for (let i = 0; i < evens.length; evens[i++] = i);
console.log("Evens", evens);

for (let i = 0; i < odds.length; odds[i++] = i)
    console.log("Odds", odds);

// What's the output?