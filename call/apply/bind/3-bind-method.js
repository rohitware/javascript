function fullName() {
    console.log(this.firstName + " " + this.lastName);
};

const person = {
    firstName: "Amar",
    lastName: "Patil",
}

const member = {
    firstName: "Rohit",
    lastName: "Ware",
}

let newFullName = fullName.bind(person);
let newFullName1 = fullName.bind(member);

console.log(newFullName);
newFullName();
newFullName1();
