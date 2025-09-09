const toggleSwitch = document.querySelector('input[type="checkbox"]');

//keep dark mode enabled when screen refreshes. 
if(localStorage.getItem("darkModeEnabled")){
    document.body.className = "dark";
    toggleSwitch.checked = true; 
}

toggleSwitch.addEventListener("click", function(e){
    const { checked } = toggleSwitch;
    
    if(checked) {
        localStorage.setItem('darkModeEnabled', true);
    }else{
        localStorage.removeItem('darkModeEnabled');
    }
    document.body.className = checked ? "dark" : "";

});