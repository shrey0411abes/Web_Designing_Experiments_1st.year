// GREETING
const greeting = document.getElementById("greeting");

const hour = new Date().getHours();

if(hour < 12)
{
    greeting.innerHTML = "Good Morning ☀️";
}
else if(hour < 18)
{
    greeting.innerHTML = "Good Afternoon 🌤️";
}
else
{
    greeting.innerHTML = "Good Evening 🌙";
}


// DIGITAL CLOCK
function updateClock()
{
    const now = new Date();

    document.getElementById("clock").innerHTML =
    now.toLocaleTimeString();

    document.getElementById("date").innerHTML =
    now.toDateString();
}

setInterval(updateClock, 1000);
updateClock();


// DARK MODE
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

});


// TODO LIST
function addTask()
{
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    if(taskInput.value === "")
    {
        alert("Please enter a task.");
        return;
    }

    const li = document.createElement("li");

    li.innerHTML = `
        ${taskInput.value}
        <button onclick="this.parentElement.remove()">
            Delete
        </button>
    `;

    taskList.appendChild(li);

    taskInput.value = "";
}


// NOTES SAVE
function saveNotes()
{
    const notes = document.getElementById("notes").value;

    localStorage.setItem("studentNotes", notes);
}