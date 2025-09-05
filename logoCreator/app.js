//Codealong 

const form = document.querySelector('#logoForm');
const brandInput = document.querySelector("input[name='brandName']");
const colorInput = document.querySelector("input[name='brandColor']");
const fontSizeInput = document.querySelector("input[name='fontSize']");
const results = document.querySelector("#results");

form.addEventListener("submit", function(event){
    event.preventDefault();
    const newLogo = makeLogo(brandInput.value, colorInput.value, fontSizeInput.value);
    results.appendChild(newLogo);    
    //brandInput.value = "";  -- this would be used if you wanted to clear inputs when submitting.  
})

function makeLogo(text, color, size) {
    const logo = document.createElement('h2');
    logo.innerText = text;
    logo.style.color = color;
    logo.style.fontSize = size + "px";
    return logo;
}