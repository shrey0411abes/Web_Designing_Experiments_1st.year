const fs = require("fs");

const fileName = "student.txt";

const studentDetails =
`Name: Rahul
Roll Number: 101
Branch: CSE
Semester: 3`;

fs.writeFileSync(fileName, studentDetails);

console.log("Student information created successfully.");

const data1 = fs.readFileSync(fileName, "utf8");

console.log("\nStudent Details:");
console.log(data1);

const additionalDetails =
`\nSubject: Full Stack Development
Marks: 85
Attendance: 92%`;

fs.appendFileSync(fileName, additionalDetails);

console.log("\nStudent information updated successfully.");

const data2 = fs.readFileSync(fileName, "utf8");

console.log("\nUpdated Student Details:");
console.log(data2);

console.log("\nAll operations completed successfully.");