const productA = {
    name: "Milk",
    quantity: 2
};

const productB = productA;

productB.quantity = 4;

console.log(productA);
console.log(productB);

// What is the Output?