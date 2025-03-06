const arrayNumbers = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];

//  Find out all the numbers which are greater than 50 and log on console
const filtArr = arrayNumbers.filter((element) => {
    return element > 50;
})
console.log(`Greater than 50 element:`,filtArr);

//Find out all the even number and log on console
const evenArr = arrayNumbers.filter((element) => {
    return element % 2 == 0;
})
console.log(`Even numbers:`,evenArr);

//Find out all the odd numbers and log on console
const oddArr = arrayNumbers.filter((element) => {
    return element % 2 != 0;
})
console.log(`Odd numbers:`,oddArr);

//Find out all the numbers which are multiple of 5
const filterArr = arrayNumbers.filter((element) => {
    return element % 5 == 0;
});
console.log(`Multiple of 5 Numbers:`,filterArr);

// Find out all numbers which are between 20 and 50
const newArr = arrayNumbers.filter((element) => {
    return (element > 20 && element < 50);
})
console.log(`Numbers between 20 and 50:`,newArr);