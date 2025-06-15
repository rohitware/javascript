function showDetails() {
    console.log(`Name: ${this.name} and age: ${this.age}`);
}

const user1 = {
    name: "Rohit",
    age: 30,
}

const user2 = {
    name: "Amar",
    age: 29,
}
showDetails.call(user1);
showDetails.call(user2);
