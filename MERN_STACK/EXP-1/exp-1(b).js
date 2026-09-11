const EventEmitter = require('events');
const app = new EventEmitter();

app.on('login' , (user)=> {
    console.log(`${user} logged in `);
});

app.on('message' , (msg) => {
    console.log(`Message: ${msg}`);
});

app.emit('login' , 'Aman');
app.emit('message' , 'Welcome to Node.js');