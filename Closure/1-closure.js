function outer() {

    let name = "Rohit";

    function inner() {
        console.log("hello " + name);
    }
    return inner;
}
const greet = outer();
greet();