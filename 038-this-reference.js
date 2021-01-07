const name = "John";

const student = {
    name: "Meg",
    printName: function () {
        console.log(name);
        console.log(this.name);
        console.log(student.name);
    }
}

student.printName();

// What's the Output?