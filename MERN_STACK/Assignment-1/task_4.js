const EventEmitter = require("events");

const studentTracker = new EventEmitter();

studentTracker.on("login", (studentName) => {
    console.log(`Login: ${studentName} logged in successfully.`);
});

studentTracker.on("courseRegistration", (courseName) => {
    console.log(`Course Registration: Registered for ${courseName}.`);
});

studentTracker.on("notification", (message) => {
    console.log(`Notification: ${message}`);
});

studentTracker.on("logout", (studentName) => {
    console.log(`Logout: ${studentName} logged out successfully.`);
});

studentTracker.emit("login", "Rahul");

studentTracker.emit("courseRegistration", "Full Stack Development");

studentTracker.emit(
    "notification",
    "Your course registration was successful."
);

studentTracker.emit("logout", "Rahul");