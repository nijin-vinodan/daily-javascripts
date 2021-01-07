let joey = { name: "joey" };

let phoebe = { name: "phoebe" };

const map = new Map();
map.set(joey, "Joey's World");

const weakMap = new WeakMap();
weakMap.set(phoebe, "Phoebe's World");

// Checkpoint A
console.log(map);
console.log(weakMap);

joey = null;
phoebe = null

// Checkpoint B
console.log(map);
console.log(weakMap);

// What is the Output and what is the difference between Map and WeakMap?