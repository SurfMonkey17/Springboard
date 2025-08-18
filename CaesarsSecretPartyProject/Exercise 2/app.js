const friend = "BRUTUS";
const shiftValue = 3;

//Step 1: Store Latin alphabet in a variable with all letters in lowercase. 
const alphabet = "abcdefghijklmnopqrstuvwxyz";

//Step 2: Find the index of the first letter of Caesar's friend. Store it in a variable. 
const firstLetter = friend[0]
const index = alphabet.indexOf(firstLetter.toLowerCase());

// Question 1: The result is 1 instead of 2 because indices start with 0 so a is 0 and b is 1. 

//Question 2: Which operator could help us to wrap around and continue form the beginning of the alphabet? 
//The modulo operator would help in this situation. Once we go above 26, we could use modulo to wrap around back to the beginning. We would use % alphabet.length to get the remainder which would be the new count starting from the beginning of the alphabet. 

//Step 3: Use the Caesar Cipher technique to shift the first letter by the given shift value. Find and store the encrypted letter in a variable. 
//Step 4: Determine the length of the alphabet
//Step 5: Ensure the shift wraps around the alphabet if it exceeds(added % alphabet.length). 

const alphabetLength = alphabet.length;

const newIndex = (index + shiftValue) % alphabetLength; 
const encryptedFirstLetter = alphabet[newIndex];
//console.log(encryptedFirstLetter); //used to test if working

//Step 6: Use the slice method to extract the first 3 letters from the encrypted message "EUXWXV"
const encryptedMessage = "EUXWXV";
const teaserMessage = encryptedMessage.slice(0,3);
//console.log(teaserMessage); // used to test if working