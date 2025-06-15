function introduce(city, language) {
    console.log(`I am ${this.name} and im from ${city}, i speak ${language}`);
}

const person = {
    name: "Rohit",
};

const guest = {
    name: "Amit",
}

introduce.call(guest, "pune", "maraathi");

