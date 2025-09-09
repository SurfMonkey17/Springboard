document.addEventListener("DOMContentLoaded", function(){
    const colorForm = document.querySelector("#color-form");
    const colorInput = document.querySelector("#color-input");
    const boxContainer = document.querySelector("#box-container");
    const newBoxButton = document.querySelector("#new-box-button");
    const box = document.querySelector("#box");

    colorForm.addEventListener("submit", function(e){
        e.preventDefault();
        const boxColor = colorInput.value;
        const newBox = document.createElement("button");
        newBox.setAttribute("class", "box");
        newBox.style.backgroundColor = boxColor;
        boxContainer.append(newBox);     
    });
});