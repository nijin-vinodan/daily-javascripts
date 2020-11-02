const obj = {};

obj.someKey = obj;

console.log(obj.someKey.someKey.someKey.someKey);

// How much times can we append .someKey?