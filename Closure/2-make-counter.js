function makeCounter() {
    let count = 0;
    return {
        Increment: function () {
            count++;
            return count;
        },
        decrement: function () {
            count--;
            return count;
        },
    };
}
const counter = makeCounter();
console.log(counter.Increment());

console.log(counter.Increment());

console.log(counter.decrement());

