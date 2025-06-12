function greet(name) {
    return function () {
        console.log("Hello " + name);
    }
}
const sayHello = greet("Rohit");
sayHello();