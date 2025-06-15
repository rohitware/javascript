function greet(city, language) {
    console.log(`${this.name} is from ${city} and spaek ${language}`);
}

const person = {
    name: "Rohit",
}
greet.apply(person, ["Pune", "marathi"]);

greet.call(person, ...["bhoom", "hindi"]);  // modern way with spread 