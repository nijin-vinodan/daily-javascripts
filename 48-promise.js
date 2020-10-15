Promise.resolve(1)
    .then((x) => x + 1)
    .then((x) => x + 3)
    .then((x) => x--)
    .then((x) => console.log(x))
    .catch(console.error);


// What's the Output?