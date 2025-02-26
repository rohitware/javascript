const professor = {
    name: "Amar",
    age: 45,
    subject: "science",
    email: 'amar@gmail.com',
    university: "Pune University",
    degrees: {
        engineering: 'CSC',
        PHD: "Advance computing",
    }
}
professor.certificates = ['Hacker Rank Participation', 'Certificate in IFE course', 'Certificate in Adv Programming'];

professor.totalExperience = '14 years';
console.log(`totalExperience:${professor.totalExperience} \n`);

professor.age = 47;
console.log(`professor's age after modification: ${professor.age} \n`);

professor.certificates.splice(2, 0, "Oracle Certified");
console.log(professor.certificates);
console.log(`\n Last element of the array: ${professor.certificates[professor.certificates.length - 1]} \n`);

for (let key in professor) {
    if (typeof professor[key] === "object") {
        for (let subKey in professor[key]) {
            console.log(`${subKey}  ==>${professor[key][subKey]}`); // Display nested values
        }
    } else {
        console.log(`${key} ==> ${professor[key]}`); // Display normal values
    }
}