const p = document.querySelector("p");
p.innerText = "This content was changed using 'innerText'!";

const taskTwo = document.querySelector("task2");
task2.innerHTML = "<button>";

const body = document.querySelector("body");
body.style.backgroundColor = "#232323";

const items = document.querySelectorAll(".item");
for (let item of items){
    item.style.border = "2px solid green";
}
