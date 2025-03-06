const array_numbers = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];

//Find the sum of all numbers using reduce() and traditional way
let sum = array_numbers.reduce((previousValue, currentValue) => {
    return previousValue + currentValue;
}, 0);
console.log(`sum of numbers using reduce:`, sum);

//traditional way
let add = 0;
for (let i = 0; i < array_numbers.length; i++) {
    add = add + array_numbers[i];
}
console.log(`sum of numbers using traditional way `, add);

//Find the numbers multiple of 5 and then sum it[ Hint + filter first then use reduce( ) ]
const MulOf5Arr = array_numbers.filter((element) => {
    return element % 5 == 0;
})
console.log(`Numbers multiple of 5 are:`, MulOf5Arr);

const sumOfArr = MulOf5Arr.reduce((priviousValue, currentValue) => {
    return priviousValue + currentValue;
}, 0);
console.log(`Sum of the numbers who multiple of 5 is:`, sumOfArr);