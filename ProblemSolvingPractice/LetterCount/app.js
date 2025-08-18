//Write a function letterOccurence:

function letterOccurence(word) {

    //if word not string: 
        //Print "Error" and stop:

    if (typeof word !== "string") {
        console.log("Error");
        return;  //stop function here if not a string. 
    }

    //if word is string: 

    //create an object to hold letters and their count: 
    const letterCount = {}; 

    //for each letter, add letter and count of instances in word to letterCount. If letter already added, increment count: 
    for (let letter of word.toLowerCase()) {
        if (letter in letterCount) {
            letterCount[letter] += 1;
            }
        else {
           letterCount[letter] = 1; 
            }
                       
        } 
        
        //return the letterCount object: 
        return (letterCount);

}

   


console.log(letterOccurence(123));
console.log(letterOccurence("Moms"));
console.log(letterOccurence("Mississippi"));
console.log(letterOccurence("Caesar42"));
console.log(letterOccurence("Caesar"));
console.log(letterOccurence("AAbaBa"));

