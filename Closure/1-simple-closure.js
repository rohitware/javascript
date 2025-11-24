function outer() {
    let msg = "hello Closure!";

    function inner() {
        console.log(msg);
    }
    return inner;
}
const myFunction = outer();
myFunction();