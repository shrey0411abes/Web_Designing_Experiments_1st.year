const EventEmitter = require("events");

const studentSystem = new EventEmitter();

studentSystem.on("studentJoined", (studentName) => {
    console.log(`Student ${studentName} joined the session.`);
});

studentSystem.on("courseSelected", (courseName) => {
    console.log(`Course selected: ${courseName}`);
});

studentSystem.on("sessionEnded", (sessionCode) => {
    console.log(`Session ended. Code: ${sessionCode}`);
});

studentSystem.emit("studentJoined", "Rahul");
studentSystem.emit("courseSelected", "Full Stack Development");
studentSystem.emit("sessionEnded", 0);