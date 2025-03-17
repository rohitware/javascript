function isPalindrom(str) {
    let rev = "";
    for (let i = str.length - 1; i >= 0; i--) {
        rev = rev + str[i];
    }
    if (rev == str) {
        return `${str} is Palindrom`;
    } else {
        return `${str} is not a Palindrom`;
    }
}
let str1 = isPalindrom('madam');
console.log(str1);
let str2 = isPalindrom('141');
console.log(str2);
let str3 = isPalindrom('Sunday');
console.log(str3);
let str4 = isPalindrom('mom');
console.log(str4);
let str5 = isPalindrom('listen');
console.log(str5);
let str6 = isPalindrom('dad');
console.log(str6);

console.log(`--------------------------------------`);

function isPalindromWithReverse(str) {
    let rev = str.split("").reverse().join("")
    if (rev == str) {
        return `${str} is Palindrom`;
    } else {
        return `${str} is not a Palindrom`;
    }
}
console.log(isPalindromWithReverse('madam'));
console.log(isPalindromWithReverse('141'));
console.log(isPalindromWithReverse('Sunday '));
console.log(isPalindromWithReverse('mom '));
console.log(isPalindromWithReverse('listen'));
console.log(isPalindromWithReverse('dad '));