//A pangram is a sentence that contains every letter of the alphabet. 
//Write a function called isPangram, which checks to see if a given sentence contains every letter of the alphabet. 
//Make sure you ignore string casing. 
//Assume it is a string (don't need to check if it is a number)



function isPangram(sentence) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let lowerCased = sentence.toLowerCase();
    for (let char of alphabet) {
        if (!lowerCased.includes(char)) {
            return false; 
        }
    }
    return true;
}

console.log(isPangram("The five boxing wizards jump quickly")); //true
console.log(isPangram("The five boxing wizards jump quick")); //false