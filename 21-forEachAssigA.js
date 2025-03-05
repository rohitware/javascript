const arrayNumbers = [1, - 7, 40, 502, - 77, 91, 0, 108, 89, - 601];

console.log(`1:-array element with it's index using forEach( ) with arrow function `);
arrayNumbers.forEach((element, index) => {
    console.log(index, element);
});

console.log(`\n 2:- Positive Numbers using forEach:`);
arrayNumbers.forEach(element => {
    if (element > 0) {
        console.log(element);
    }
});

console.log(`\n 3:- Negative Numbers using arrow function: `);
let negNumbers = [];
arrayNumbers.forEach(element => {
    if (element < 0) {
        negNumbers.push(element)
        console.log(element);
    }
})

console.log(`\n 4:- Even Numbers using using forEach( ) with arrow function: `);
arrayNumbers.forEach(element => {
    if (element % 2 == 0)
        console.log(element);
})

console.log(`\n 5:- sum of all elements from arrayNumbers `);
sum = 0;
arrayNumbers.forEach(element => {
    sum = sum + element;
})
console.log(sum);

console.log(`\n 6:- only even indexed array value`);
arrayNumbers.forEach((element, index) => {
    if (index % 2 == 0) {
        console.log(element);

    }
})