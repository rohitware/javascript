function generate() {
    let message = "Hello";
    return function (name) {
        console.log(message + "" + name);
    };
}

const sayHello = generate();
sayHello("Rohit");
sayHello("Ware");