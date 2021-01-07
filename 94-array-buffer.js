const buffer = new ArrayBuffer(16);

const view = new Uint32Array(buffer);

console.log(view);

view[0] = 111111;

console.log(view);

// What is the Output?
