//Use innerText to change content: 
const p = document.querySelector("p");
p.innerText = "This content was changed using 'innerText'!";

//Use innerHTML to add a submit button: 
const taskTwo = document.querySelector("task2");
task2.innerHTML = "<button>";

//Change background color to "#232323":
const body = document.querySelector("body");
body.style.backgroundColor = "#232323";

//Make all elements with class of "item" have border: 
const items = document.querySelectorAll(".item");
for (let item of items){
    item.style.border = "2px solid green";
}

//change href attribute to https://www.springboard.com":
const ref = document.querySelector("#task5");
ref.setAttribute("href", "https://www.springboard.com/");

//change value to "DOM Master":
const val = document.querySelector("input");
val.value = "DOM Master";

//Use classList to add "new-class" to element:
task7.classList.add("new-class");

//Append new button under element: 
const newButton = document.createElement("button");
task8.append(newButton);

//remove element: 
const removeTask = document.getElementById("task9");
removeTask.remove();
