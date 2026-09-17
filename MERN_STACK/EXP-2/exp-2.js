const fs = require('fs');

fs.writeFileSync('student.txt' , 'B.Tech Node.js Lab');

const data = fs.readFileSync('student.txt' , 'utf8');

console.log(data);

fs.writeFileSync('student.txt' , 'Name: Rahul\nSubject: Full Stack Development');

console.log('File created successfully');

fs.appendFileSync('studnet.txt' , '\nExperiment 2 completed.');