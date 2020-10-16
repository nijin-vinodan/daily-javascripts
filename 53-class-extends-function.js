function template(name) {
    return class {
        sayHello() {
            console.log(`Hello ${name}`);
        }
    }
}

class Greeting extends template('Adam') { };

const greet = new Greeting();
greet.sayHello();

// What’s the output?
// Is it valid to extend a class from a function?