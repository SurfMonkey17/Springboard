document.addEventListener("DOMContentLoaded", function(){
    const colorForm = document.querySelector("#color-form");
    const colorInput = document.querySelector("#color-input");
    const boxContainer = document.querySelector("#box-container");
    const newBoxButton = document.querySelector("#new-box-button");
    let boxColor = null;
    let boxID = 0;

    //function to create new box 
    function newBox(){
        const newBox = document.createElement("div");
        newBox.setAttribute("class", "box");
        newBox.innerText = `Box ${boxID}`
        newBox.style.backgroundColor = boxColor; 
        newBox.dataset.id = boxID;
        boxContainer.append(newBox);
        boxID++; 
    };

    //allow user to set color on new and old boxes: 
    colorForm.addEventListener("submit", function(e){
        e.preventDefault();
        const newColor = colorInput.value.trim();  //removes whitespaces
        const boxes = document.querySelectorAll(".box");
        for (let box of boxes){
            box.style.backgroundColor = newColor;
        }
        boxColor = newColor; 
        colorInput.value = "";
    });

    //calls newBox function when new box button is clicked and creates new box: 
    newBoxButton.addEventListener("click", function(e){
        newBox();
    });

    //remove box when double clicked: 
    document.addEventListener("dblclick", function(e){
        if (e.target.classList.contains("box")){
            e.target.remove();
        };
    });

    //shows coordinates when mouse moves over box: 
    document.addEventListener("mouseover", function(e){
        if (e.target.classList.contains("box")){
            e.target.innerText = `x: ${e.pageX}, y: ${e.pageY}`;
        };
    });

    //displays box ID again when mouse moves away from box: 
    document.addEventListener("mouseout", function(e){
        if (e.target.classList.contains("box")){
            const boxID = e.target.getAttribute("data-id")
            e.target.textContent = `Box ${boxID}`;
        };
    });

    //allow user to create new boxes with the n or N key press:
    document.addEventListener("keydown", function(e){
        if (e.target.id === "color-input"){           //ignores the n key press in the input field. 
            return; 
        };

        if (e.key === "n" || e.key === "N")
        {
            newBox();
        };
    });
  
});


