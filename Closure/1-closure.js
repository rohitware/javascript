function outer() {

    let name = "Roht";

    function inner() {
        console.log("hello " + name);
    }
    return inner;
}
const greet = outer();
greet();