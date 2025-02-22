//WAP to print numbers from 5 to 15 by incrementing 1

var num = 5; 
while (num <= 15) { 
    console.log(num);
    num++; 
}
console.log(`=============================================`);


//WAP to print numbers from 50 to 40 by decrementing by 1

var num = 50; 
while (num >= 40) { 
    console.log(num);
    num--; 
}
console.log(`=============================================`);


//WAP to find first 15 odd numbers

var count = 0; 
var num = 1;  
while (count < 15) {
    console.log(num);
    num = num + 2; 
    count++;  
}
console.log(`=============================================`);

// WAP to find first 10 even numbers

var count = 0;
var num = 0;
while (count < 10) {
    console.log(num);
    num = num + 2;
    count++;
}
console.log(`=============================================`);


// WAP to print table of 5 like + 5 10 15 20 25

var num = 5;
var i = 1;

while (i <= 10) {
    console.log(num * i);
    i++;
}
console.log(`=============================================`);


// WAP to print table of 10 like 10 20 30 40 ...... 100

var num = 10;
var i = 1;
while (i <= 10) {
    console.log(num * i);
    i++;
}
console.log(`=============================================`);


//. WAP to print table of 10 in reverse order like - 100 90 80 70 ...... 10

var num = 10;
var i = 10;
while (i >= 1) {
    console.log(num * i);
    i--;
}