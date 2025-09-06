const btn = document.querySelector('#change-color-button');

btn.addEventListener("click", function(event){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256); 
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
})

