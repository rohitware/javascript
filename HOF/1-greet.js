function greet(name) {
    return `Hello, ${name}`;
}

function processUserInput(callback) {
    const name = "Rohit";
    console.log(callback(name));
}

processUserInput(greet); // Output: Hello, Rohit
