console.log(`============Log the first and last element on console============`);
const fruits_seasonal = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(`First element: ${fruits_seasonal[0]} and Last element: ${fruits_seasonal[fruits_seasonal.length - 1]}`);


console.log(`==================Added Papaya before Banana==================`);
fruits_seasonal.unshift('Papaya');
console.log(fruits_seasonal);

console.log(`==================Remove mango from array==================`);
fruits_seasonal.splice(4, 1);
console.log(fruits_seasonal);

console.log(`==================Added Pineapple at last position ==================`);
fruits_seasonal.push('Pineapple');
console.log(fruits_seasonal);

console.log(`==================Inserted an element - 'Dragon Fruit' before "Water Melon"==================`);
fruits_seasonal.splice(4, 0, "Dragon Fruit");
console.log(fruits_seasonal);

console.log(`==================Replaced an element 'Orange' with 'Kiwi'==================`);
fruits_seasonal.splice(2, 1, "Kiwi");
console.log(fruits_seasonal);

console.log(`==================Log the elements starting from index 1 to 4==================`);
let sliceArr = fruits_seasonal.slice(1, 4);
console.log(sliceArr);

console.log(`==============selected last 3 element and log it Useing the length property==============`);
let sliceArr1= fruits_seasonal.slice(fruits_seasonal.length-3);
console.log(sliceArr1);
