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
        newBox.style.backgroundColor = boxColor; 
        newBox.dataset.id = boxID;
        boxContainer.append(newBox);
        boxID++; 
    };

    colorForm.addEventListener("submit", function(e){
        e.preventDefault();
        const newColor = colorInput.value.trim();
        const boxes = document.querySelectorAll(".box");
        for (let box of boxes){
            box.style.backgroundColor = newColor;
        }
        boxColor = newColor; 
        colorInput.value = "";
    });

    newBoxButton.addEventListener("click", function(e){
        newBox();
    });

    document.addEventListener("dblclick", function(e){
        if (e.target.classList.contains("box")){
            e.target.remove();
        };
    });

    document.addEventListener("mouseover", function(e){
        if (e.target.classList.contains("box")){
            e.target.innerText = `x: ${e.pageX}, y: ${e.pageY}`;
        };
    });

    document.addEventListener("mouseout", function(e){
        if (e.target.classList.contains("box")){
            const boxID = e.target.getAttribute("data-id")
            e.target.textContent = `Box ${boxID}`;
        };
    });

    document.addEventListener("keydown", function(e){
        if (e.target.id === "color-input"){
            return; 
        };

        if (e.key === "n" || e.key === "N")
        {
            newBox();
        };
    });
  
});


