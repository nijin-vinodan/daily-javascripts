const product = {
    name: "Casual T-Shirt",
    cost: 240,
    color: 'red'
};

Object.seal(product);

product.cost = 350;
product.discount = "10%";

console.log(product);

// What is the Output?