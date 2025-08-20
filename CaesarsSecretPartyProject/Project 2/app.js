//Craft 2 functions: one that encrypts a message but with added layers of complexity and another that decrypts such messages. 


const alphabet = "abcdefghijklmnopqrstuvwxyz";

//Implementing Encryption: 
//Step 1: Take a plaintext message and a shift value and return encrypted string.  If the message includes a character not in the alphabet, pass it as is to the encrypted string (if/else). 
//Step 2: After every 2 letters, insert a random letter from the alphabet. 

//function to encrypt each letter of message: 

function encryptLetter(letter, shiftValue) {
  let encryptedLetters = alphabet[(alphabet.indexOf(letter.toLowerCase()) + shiftValue) % alphabet.length];
  return encryptedLetters;
}


function encrypt (message, shiftValue)
{
  //create a variable to hold new message: 

  let encryptedMessage = ""; 

  //loop through each char: 
  for (let i = 0; i < message.length; i++) {

  //if character not in alphabet, pass it as is: 
    if (!alphabet.includes(message[i].toLowerCase())){
      encryptedMessage += message[i];
    } 
  //else use shiftValue to encrypt: 
    else {
      encryptedMessage += encryptLetter(message[i], shiftValue);
    }




  }
  // Your encryption code here
  return encryptedMessage;
}

console.log(encrypt("wow!", 4));
console.log(encrypt("abc", 1));
console.log(encrypt("BRUTUS", 3));
console.log(encrypt("Encrypt this message", 10));


// //Implementing Decryption: 
// //Step 1: Take the encrypted message and a shift value and return original message. 


// function decrypt (encryptedMessage, shiftValue)
// {
//   // Your decryption code here
//   return decryptedMessage;
// }


// //Test: 

// decrypt("Iueuan jrxuq cjythdykwxaj mixkqtaeml ebv wHenckvbkei rqdmt fHukckvi.r Jbxuihus, tmxayiwfuxh sjxau amenhtv 'zQkhhuubyjkit' yjew jhxux mxydatij. zJxmu hvymhihj ajel kldlsuyjb dyju yid uekdh qIbkqsxa xsxqqdvduzb wuqzhdoi qjxwu waueo xjem jfxuy dpuntj dgkvuiwj.", 42);