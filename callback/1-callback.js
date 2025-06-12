function greet(name, callback) {
    console.log("hi " + name);
    callback();
}

function sayBye() {
    console.log("bye bye");
}
greet("Rohit", sayBye);

//sayBye is passed as a callback to greet()
//greet() runs sayBye() when it's done