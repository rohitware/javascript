function greaterNumber(num1, num2) {
    var res = num1 > num2 ? num1 : num2;
    console.log(`Greater number between ${num1} and ${num2} is: ${res}`);
}
greaterNumber(10, -10);
greaterNumber(800, 899);
console.log(`========================================`);


var isEvenOrOddNum = function (num) {
    var Result = num % 2 == 0 ? "even" : "odd";
    console.log(`The number ${num} is ${Result}`);
    return Result;
}
isEvenOrOddNum(29);
isEvenOrOddNum(44);
isEvenOrOddNum(0);
isEvenOrOddNum(101);

console.log(`========================================`);


function wordLength(word) {
    let wordLen = word.length;
    let result = wordLen % 2 == 0 ? "EVEN" : "ODD";
    console.log(`length of the word "${word}" is: ${wordLen} and it is ${result} number`);
    return result;
}
wordLength("javascript");
wordLength("Developer");
wordLength("Google");