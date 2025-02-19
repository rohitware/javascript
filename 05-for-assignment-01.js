for (let i = 5; i <= 15; i++) {
    console.log(i);  // numbers from 5 to 15
}

console.log(`========================`);

for (let i = 50; i >= 40; i--) {
    console.log(i); // numbers from 50 to 40
}

console.log(`========================`);

for (let i = 1, count = 0; count < 15; i = i + 2, count++) {
    console.log(i); // first 15 odd numbers
}

console.log(`========================`);
for (let i = 1; i <= 10; i++) {
    console.log(i * 2);       // first 10 even numbers 
}

console.log(`========================`);

for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`); // table of 5
}

console.log(`========================`);

for (let i = 1; i <= 10; i++) {
    console.log(`10 x ${i} = ${10 * i}`);// table of 10
}


console.log(`========================`);

for (let i = 10; i >= 1; i--) {
    console.log(`10 x ${i} = ${10 * i}`);// table of 10 inreverse order
}