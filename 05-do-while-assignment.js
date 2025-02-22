//WAP to print numbers from 5 to 15 by incrementing 1

var num = 5;
do {
    console.log(num);
    num++;
} while (num <= 15);
console.log(`==================================`);


//WAP to print numbers from 50 to 40 by decrementing by 1

var num = 50;
do {
    console.log(num);
    num--;
} while (num >= 40);
console.log(`==================================`);


//WAP to find first 15 odd numbers

var num = 1;
var count = 0;
do {
    console.log(num);
    num = num + 2;
    count++;
} while (num <= 15);

console.log(`==================================`);


// WAP to find first 10 even numbers

var num = 0;
var count = 0;
do {
    console.log(num);
    num = num + 2;
    count++;
} while (num <= 10);
console.log(`==================================`);


// WAP to print table of 5 like + 5 10 15 20 25

var num = 5;
var i = 1;
do {
    console.log(num * i);
    i++;
} while (i <= 10);
console.log(`=============================================`);


// WAP to print table of 10 like 10 20 30 40 ...... 100

var num = 10;
var i = 1;
do {
    console.log(num * i);
    i++;
} while (i <= 10);
console.log(`=============================================`);


//. WAP to print table of 10 in reverse order like - 100 90 80 70 ...... 10

var num = 10;
var i = 10;
do {
    console.log(num * i);
    i--;
} while (i >= 1);