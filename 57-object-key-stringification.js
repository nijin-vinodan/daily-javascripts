const a = {};

const b = { key: 'b' };
const c = { key: 'c' };

a[b] = "apple";
a[c] = "mango";

console.log(a[b]);
console.log(a[c]);

// What's the output