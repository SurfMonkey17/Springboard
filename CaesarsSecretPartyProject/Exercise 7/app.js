const friend = "BRUTUS";
const shiftValue = 3;
const alphabet = "abcdefghijklmnopqrstuvwxyz";
const alphabetLength = alphabet.length;

let encryptedName = "";

for (i = 0; i < friend.length; i++){
    const letter = friend[i].toLowerCase();
    const index = alphabet.indexOf(letter); 
    const newIndex = (index + shiftValue) % alphabetLength; 
    encryptedName += alphabet[newIndex].toUpperCase();
    
}

console.log(encryptedName);

// Question 1: What advantage does using a loop provide over manually encrypting each letter? 

//Saves time, less to type out, and results in a more readable code. 

// Question 2: Explain the role of % in our loop. How does it aid in the encryption process? 

// When adding our shiftValue, it could lead to going beyond the alphabet. The % allows us to wrap back around to the beginning of the alphabet by subtracting the length of the alphabet and leaving the remainder, which becomes our new value. 


