function introduce(language) {
    console.log(`I am ${this.name} and im from ${this.city}, i speak ${language}`);
}

const person = {
    name: "Rohit",
    city: "bhoom",
};

const guest = {
    name: "Amit",
    city: "barshi",
}

introduce.call(guest, "marathi");
introduce.call(person, "hindi")

