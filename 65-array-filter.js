const array = [1, 2, 0, 5, 0, 6, 0];

let newArray = [];

for (let num of array) {
    if (num !== 0) {
        newArray.push(num);
    }
}

// Here we are trying to construct a new array by removing 0's from existing array.
// Is it possible to do this in a simpler way?