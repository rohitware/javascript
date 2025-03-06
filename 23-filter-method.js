const array = [7, 15, 20, 3, 25, 2, 40]
let filterArr = array.filter((element) => {
    return element % 5 == 0;
});
console.log(filterArr);


// const array = [7, 15, 20, 3, 25, 2, 40]
// array.filter((element) => {
// if (element %5 == 0) {
//     console.log( element);
// }
// })