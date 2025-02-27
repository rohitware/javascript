console.log(`1.`);

class Vehicle {
    constructor(type, brand, model, year, color) {
        this.type = type;
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.color = color;
    }
    // Method to log details in a meaningful way
    logDetails() {
        console.log(`This is a ${this.color} ${this.year} ${this.brand} ${this.model}, which is a type of ${this.type}.`);
    }
}

// Creating 5 Vehicle objects
let car = new Vehicle("Car", "Maruti", "Swift", 2022, "White");
let bike = new Vehicle("Motorcycle", "TVS", "Apache RTR 160 4V", 2018, "black");
let tractor = new Vehicle("Tractor", "Swaraj", "F-724 XM ORCHARD NT", 2016, "Blue-White");
let bus = new Vehicle("Bus", "Mercedes", "Sprinter", 2020, "Red");
let scooter = new Vehicle("Scooter", "Honda", "Activa", 2024, "Grey");

// Logging details of each vehicle
car.logDetails();
bike.logDetails();
tractor.logDetails();
bus.logDetails();
scooter.logDetails();

console.log(`\n2. `);
// Define the College class
class College {
    constructor(name, location, courses, university) {
        this.name = name;
        this.location = location;
        this.courses = courses;
        this.university = university;
    }

    // Method to display object details
    display() {
        console.log(`College Name: ${this.name}`);
        console.log(`Location: ${this.location}`);
        console.log(`Courses Offered: ${this.courses}`);
        console.log(`University: ${this.university}`);
        console.log("--------------------------------------------------------");
    }
}

// Creating 4 College objects
let college1 = new College("Wadia College", "Pune", ["Engineering", "Law", "Medicine"], "Pune University");
let college2 = new College("TMV", "Pune", ["AI", "Mass Media", "Business"], "Tilak Maharashtra University");
let college3 = new College("S.P.College", "Bhoom", ["Computer Science", "Mechanical", "Electrical"], "BAMU");
let college4 = new College("Modern College ", "Pune", ["Arts", "Economics", "Biotech"], "Pune University");

// Invoking display() for each object
college1.display();
college2.display();
college3.display();
college4.display();