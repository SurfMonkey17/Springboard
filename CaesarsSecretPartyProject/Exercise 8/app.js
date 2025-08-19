const friend = "BRUTUS";
const shiftValue = 3;
const alphabet = "abcdefghijklmnopqrstuvwxyz";

//Step 1: Create a function named encryptLetter that takes a letter and shift value as parameters and returns the encrypted version of letter: 

function encryptLetter (letter, shiftValue) {

    let encryptedLetter = (alphabet.indexOf(letter.toLowerCase()) + shiftValue) % alphabet.length;

    return encryptedLetter;

}

console.log(encryptLetter("d", 10));