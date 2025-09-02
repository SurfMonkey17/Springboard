
//HINTS:
//document.addEventListener("")

//window.innerWidth
//window.innerHeight

//rgb(0, 0, 0) use coordinates, one for red and other for blue. 

document.addEventListener("mousemove", function(event){
    const mouseX = Math.round((event.pageX * 255)/window.innerWidth); 
    const mouseY = Math.round((event.pageY * 255)/window.innerHeight);
    const color = `rgb(${mouseX}, 0, ${mouseY}`;
    document.body.style.backgroundColor = color;
})



//My initial solution before hints: 

// document.addEventListener("mousemove", function(event){

//     const mouseX = event.pageX;
//     const mouseY = event.pageY; 


//     document.body.style.backgroundColor = `#${mouseX}${mouseY}`;
//     });