function greetUser(name, callback) {
    console.log("hi", name);
    callback();
}

function sayWelcome() {
    console.log("Welcome to our site!");
}
greetUser("Rohit", sayWelcome)