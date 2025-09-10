document.addEventListener("DOMContentLoaded", function(){

    const memeForm = document.querySelector("#meme-form")
    const imageUrlInput = document.querySelector("#image-url");
    const topTextInput = document.querySelector("#top-text");
    const bottomTextInput = document.querySelector("#bottom-text");
    const createdMemes = document.querySelector("#created-memes");


    //submit form:
    memeForm.addEventListener("submit", function(e){
        e.preventDefault();
        //get image:
        const imageUrl= imageUrlInput.value.trim();

        //check if URL. Display message to user if not:
        if (!imageUrl.match(/^https?:\/\/.+/i)){
            alert("Please enter a valid image URL starting with http or https.");
            return;
        }

        const img = document.createElement("img");
        img.src = imageUrl;
        img.alt = "Meme image";
        
        //display error if image can't be loaded: 
        img.addEventListener("error", function(){
            alert("The image could not be loaded. Please check the URL.")
        });

        //create a div element to hold meme and append to createdMemes div:
        const memeDiv = document.createElement("div"); 
        createdMemes.append(memeDiv);
       
        //attach url to memeDiv:
         memeDiv.append(img);
        
        //pull in text
        const topText = document.createElement("p");
        topText.innerText = topTextInput.value;
        createdMemes.append(topText);
        
        const bottomText = document.createElement("p");
        bottomText.innerText = bottomTextInput.value;
        createdMemes.append(bottomText);
        //put text over image     
        //append to created-memes div
        
        //create delete button to delete meme
        //form boxes clear out automatically after submission
        imageUrlInput.value = "";
        topTextInput.value = "";
        bottomTextInput.value = "";
    })


     

    


})



