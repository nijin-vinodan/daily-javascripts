const student = {
    name: "John Doe",
    age: 22
};

const handler = {
    get: function (target, prop, receiver) {
        return "James Bell"
    }
};

const proxy = new Proxy(student, handler);
console.log(proxy.name);
console.log(proxy.age);