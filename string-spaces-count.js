// using builtin method split.

function countSpaces(str) {
    return str.split(" ").length - 1;
}
let str1 = "Revision is the mother of success";
console.log(str1);
console.log(`Total spaces:`, countSpaces(str1));

console.log(`===============================================`);

let str2 = "Javascript is the language of internet world";
console.log(str2);
console.log(`Total spaces:`, countSpaces(str2));

console.log(`===============================================`);

//without using builtin method
function countSpaceFromStr(str) {
    let count = 0;
    for (let i = 0; i <= str.length; i++) {
        if (str[i] === " ") {
            count++;
        }
    }
    return count;
}
let str3 = "Revision is the mother of success";
console.log(str3);
console.log(`Total spaces:`, countSpaces(str3));
console.log(`===============================================`);

let str4 = "Javascript is the language of internet world";
console.log(str2);
console.log(`Total spaces:`, countSpaces(str4));