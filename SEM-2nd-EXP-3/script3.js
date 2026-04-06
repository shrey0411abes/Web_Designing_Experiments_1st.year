
// Change text
document.getElementById("changeText").addEventListener("click", function() {
    document.getElementById("heading").innerHTML = "Text Changed!";
});

// Change color
document.getElementById("changeColor").addEventListener("click", function() {
    document.getElementById("para").style.color = "red";
});

// Hide paragraph
document.getElementById("hide").addEventListener("click", function() {
    document.getElementById("para").style.display = "none";
});

// Show paragraph
document.getElementById("show").addEventListener("click", function() {
    document.getElementById("para").style.display = "block";
});

// Mouseover event
document.getElementById("box").addEventListener("mouseover", function() {
    this.style.backgroundColor = "yellow";
    this.innerHTML = "Mouse Over!";
});

// Mouseout event
document.getElementById("box").addEventListener("mouseout", function() {
    this.style.backgroundColor = "lightblue";
    this.innerHTML = "Hover Me";
});

// Input typing event
document.getElementById("inputBox").addEventListener("keyup", function() {
    document.getElementById("display").innerHTML = "You typed: " + this.value;
});

// change bg color
document.getElementById("bgColorBtn").onclick=function(){
    document.body.style.backgroundColor="#"+Math.floor(Math.random()*16777215).toString(16);
};

// incresase font size
document.getElementById("fontSizeBtn").addEventListener("click", function(){
    fontSize +=2;
    paragraph.style.fontSize = fontSize + "px";
});

// show/hide paragraph
document.getElementById("toggleBtn").addEventListener("click", function(){
    if(paragraph.style.display === "none"){
        paragraph.style.display = "block";
    } else {
        paragraph.style.display = "none";
    }
});

// reset page
// document.getElementById("resetBtn").addEventListener("click", function(){
//     HTMLHeadingElement.innerHTML = "Welcome to JavaScript DOM Manipulation!";
//     document.body.style.backgroundColor = "#ffffff";
//     paragraph.style.fontSize = "16px";
//     paragraph.style.display = "block";
//     input.value = "";

let paragraph = document.getElementById("para");
let input = document.getElementById("inputBox");
let fontSize = 16;

// Change text
document.getElementById("changeText").addEventListener("click", function() {
    document.getElementById("heading").innerHTML = "Text Changed!";
});

// Change color
document.getElementById("changeColor").addEventListener("click", function() {
    paragraph.style.color = "red";
});

// Hide paragraph
document.getElementById("hide").addEventListener("click", function() {
    paragraph.style.display = "none";
});

// Show paragraph
document.getElementById("show").addEventListener("click", function() {
    paragraph.style.display = "block";
});

// Mouseover event
document.getElementById("box").addEventListener("mouseover", function() {
    this.style.backgroundColor = "yellow";
    this.innerHTML = "Mouse Over!";
});

// Mouseout event
document.getElementById("box").addEventListener("mouseout", function() {
    this.style.backgroundColor = "lightblue";
    this.innerHTML = "Hover Me";
});

// Input typing event
document.getElementById("inputBox").addEventListener("keyup", function() {
    document.getElementById("display").innerHTML = "You typed: " + this.value;
});

// Change background color
document.getElementById("bgColorBtn").onclick = function() {
    document.body.style.backgroundColor =
        "#" + Math.floor(Math.random() * 16777215).toString(16);
};

// Increase font size
document.getElementById("fontSizeBtn").addEventListener("click", function() {
    fontSize += 2;
    paragraph.style.fontSize = fontSize + "px";
});

// Toggle paragraph
document.getElementById("toggleBtn").addEventListener("click", function() {
    if (paragraph.style.display === "none") {
        paragraph.style.display = "block";
    } else {
        paragraph.style.display = "none";
    }
});

// Reset page
document.getElementById("resetBtn").addEventListener("click", function() {
    document.getElementById("heading").innerHTML = "Welcome to JavaScript DOM Manipulation!";
    document.body.style.backgroundColor = "#ffffff";
    paragraph.style.fontSize = "16px";
    paragraph.style.display = "block";
    input.value = "";
});
