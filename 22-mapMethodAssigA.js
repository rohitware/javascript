const arrayNumbers = [20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19];

//Add 10 into each element and log new array result on console
resArr = arrayNumbers.map((num) => {
    return num + 10;
})
console.log(`New array after adding 10`, resArr);

//Cube the each array element and log on console
cubArr = arrayNumbers.map((element) => {
    return element ** 3;
})
console.log(`Cube the each array element`, cubArr);

//Add the index value into its corresponding each array element and log new array result on console
indexaddedArr = arrayNumbers.map((element, index) => {
    return element + index;
})
console.log(`Array after adding index value`, indexaddedArr);