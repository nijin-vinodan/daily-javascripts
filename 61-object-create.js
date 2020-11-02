const student = {
    name: "John Doe",
    learn: function () {
        return this.name + ' learns';
    }
};

const ray = Object.create(student);

console.log(ray);
console.log(ray.name);

// What's the output?