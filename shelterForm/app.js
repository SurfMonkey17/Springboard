const form = document.querySelector("#shelterForm");
const input = document.querySelector("#catName");
const list = document.querySelector("#cats")

form.addEventListener("submit", function(event){
   event.preventDefault();     
   console.log(input.value);
   const catName = input.value;
   const newLI= document.createElement("LI");
   newLI.innerText = catName;     
   list.append(newLI)    //adds input to list
   input.value="";   //clear form on submission
})
