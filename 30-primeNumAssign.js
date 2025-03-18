const array = [3, 9, 7, 6, 19, 29, 53]

function isPrime(num) {
    for (let index = 2; index < num; index++) {
        if (num % index == 0) {
            return false;
        }
        return true;
    }
}

function countPrimes(arr) {
    return arr.filter(isPrime).length;
}
let count = countPrimes(array)
console.log(`Given array:`, array);
console.log(`Total prime numbers from above array is:`, count);