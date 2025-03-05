let msg = () => {
    console.log(`1a: "Good Morning, Today is Wednesday"`);
}
msg();

let multiplication = (p1, p2, p3 = 1) => {
    console.log(`Multiplication of given numbers is: ${p1 * p2 * p3}`);
}
multiplication(5, 5, 2)
multiplication(10, 4)

let addition = (p1, p2, p3, p4, p5) => {
    let result = p1 + p2 + p3 + p4 + p5;
    return result;
}
let sum = addition(100, 100, 200, 349, 756)
console.log(`3.a: Addition of given number is:`, sum);

let concat = addition("I am ", " learning ", " ES6 ", ' features ', " in depth")
console.log(`3.c:`, concat);