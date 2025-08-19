const friend = "BRUTUS";
const shiftValue = 3;
const alphabet = "abcdefghijklmnopqrstuvwxyz";

//Step 1: Create a function named encryptLetter that takes a letter and shift value as parameters and returns the encrypted version of letter: 

function encryptLetter (letter, shiftValue) {

    let encryptedLetters = alphabet[(alphabet.indexOf(letter.toLowerCase()) + shiftValue) % alphabet.length];

    return encryptedLetters;

}

//Step 2: Create a function named encryptMessage that takes a word and a shift value as parameters and returns the encrypted version of the entire word: 

function encryptMessage (word, shiftValue) {

    let encryptedWord = "";

    for (let i = 0; i < word.length; i++) {
        
        encryptedWord += encryptLetter(word[i], shiftValue).toUpperCase(); 
    }
    
    return encryptedWord;
    
}

//Step 3: Create a function named decryptLetter that takes an encrypted letter and a shift value as parameters and return the decrypted version of the letter: 

function decryptLetter(encryptedLetter, shiftValue) {

    let decryptedLetter = alphabet[((alphabet.indexOf(encryptedLetter.toLowerCase()) - shiftValue) + alphabet.length) % alphabet.length];

    return decryptedLetter;
}





console.log(encryptLetter("d", 10));
console.log(encryptMessage("BRUTUS", 3));
console.log(decryptLetter("b", 3));