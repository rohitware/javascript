const employeeInfoJson = `
{
"name": "Aleix Melon",
"id": "E00245",
"role": ["Dev", "DBA"],
"age": 23,
"doj": "11-12-2019",
"married": false,
"address": {
"street": "32, Laham St.",
"city": "Innsbruck",
"country": "Austria"
},
"referred-by": "E0012"
}`;



const employeeInfoObj = JSON.parse(employeeInfoJson);

console.log(`Converted JSON to Object`);
console.log(employeeInfoObj);

rollArry = employeeInfoObj.role;
console.log(`\n Log role Dev`);
console.log(rollArry);
console.log(rollArry[0]); // log role Dev

let lastName = employeeInfoObj.name.split(" ");
console.log(`\n Log last name Melon`);
console.log(lastName);
console.log(lastName[1]); // log last name Melon

let joinYearOfEmp = employeeInfoObj.doj.split("-");
console.log(`\n Log joining year of employee`);
console.log(joinYearOfEmp);
console.log(joinYearOfEmp[2]);// log jioning year of emp