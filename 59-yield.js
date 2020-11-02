function* autoIncrement(index) {
    while (index > 0) {
        yield index;
        index++;
    }
}

const incrementer = autoIncrement(1);

console.log(incrementer.next().value);
console.log(incrementer.next().value);
console.log(incrementer.next().value);

// What is the Output?