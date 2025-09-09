document.addEventListener("DOMContentLoaded", function(){
    const colorForm = document.querySelector("#color-form");
    const colorInput = document.querySelector("#color-input");
    const boxContainer = document.querySelector("#box-container");
    const newBoxButton = document.querySelector("#new-box-button");
    let boxColor = null;
    let boxID = 0;

    function newBox(){
        const newBox = document.createElement("div");
        newBox.setAttribute("class", "box");
        newBox.innerText = `Box ${boxID}`
        boxID++; 
        newBox.style.backgroundColor = boxColor; 
        boxContainer.append(newBox);
    }

    colorForm.addEventListener("submit", function(e){
        e.preventDefault();
        const newColor = colorInput.value.trim();
        const boxes = document.querySelectorAll(".box");
        for (let box of boxes){
            box.style.backgroundColor = newColor;
        }
        boxColor = newColor; 
        colorInput.value = "";
    })

    newBoxButton.addEventListener("click", function(e){
        newBox();
    })
  
});



//   colorForm.addEventListener("submit", function(e){
//         e.preventDefault();
//         const boxColor = colorInput.value;
//         const newBox = document.createElement("button");
//         newBox.setAttribute("class", "box");
//         newBox.style.backgroundColor = boxColor;
//        
//     });