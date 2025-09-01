

document.addEventListener("mousemove", function(event){

    const mouseX = event.pageX;
    const mouseY = event.pageY; 

    document.body.style.backgroundColor = `#${mouseX}${mouseY}`;
    });
    
