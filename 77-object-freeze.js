const product = {
    name: "Casual T-Shirt",
    cost: "240",
    color: 'red'
};

Object.freeze(product);

product.cost = "490";

console.log(product);

// What is the Output?