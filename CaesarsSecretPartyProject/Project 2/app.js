//Craft 2 functions: one that encrypts a message but with added layers of complexity and another that decrypts such messages. 

const alphabet = "abcdefghijklmnopqrstuvwxyz";

//Implementing Encryption: 
//Step 1: Take a plaintext message and a shift value and return encrypted string.  If the message includes a character not in the alphabet, pass it as is to the encrypted string. 
//Step 2: After every 2 letters, insert a random letter from the alphabet. 

//function to encrypt each letter of message: 
function encryptLetter(letter, shiftValue) {
  let encryptedLetter = alphabet[(alphabet.indexOf(letter.toLowerCase()) + shiftValue) % alphabet.length];
  return encryptedLetter;
}

function encrypt(message, shiftValue){
  //variable to hold new message: 
  let encryptedMessage = ""; 
  
  //loop through each char: 
  for (let i = 0; i < message.length; i++) {

    //insert random letter from alphabet every 2 letters: (used ChatGPT as resource here to help me revise my code to get first random letter in the correct spot) 
    if (((i + 1) % 3) === 0) {
      let randomLetter = generateRandomLetter();
      encryptedMessage += randomLetter;
    }

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

//function to generate random letters: (used StackOverflow as resource: https://stackoverflow.com/questions/38620152/pick-a-random-letter-from-string-in-javascript)
function generateRandomLetter(){
let randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
return randomLetter;
}

console.log(encrypt("wow!", 2));
console.log(encrypt("abc", 1));
console.log(encrypt("BRUTUS", 3));
console.log(encrypt("Encrypt this message", 0));


//Implementing Decryption: 
//Step 1: Take the encrypted message and a shift value and return original message. 

function decryptLetter(encryptedLetter, shiftValue) {

    let decryptedLetter = alphabet[((alphabet.indexOf(encryptedLetter.toLowerCase()) - shiftValue) + alphabet.length) % alphabet.length];
    return decryptedLetter;
}

function decrypt (encryptedMessage, shiftValue) {

    let decryptedMessage = "";
    
    //filter out random letters from encrypt function: 
  
    for (let i = 0; i < encryptedMessage.length; i++) {
      
      if (alphabet.includes(encryptedMessage[i]) && ((i + 1) % 3 === 0)) { 
        continue; 
      }
        
        if (!alphabet.includes(encryptedMessage[i].toLowerCase())){
            decryptedMessage += encryptedMessage[i];
        }

        else {
            decryptedMessage += decryptLetter(encryptedMessage[i], shiftValue);
        }
    }

    return decryptedMessage; 

}

//Test: 
console.log(decrypt("yqmy!", 2));
console.log(decrypt("bcud", 1));
console.log(decrypt("eudxwaxv", 3));
console.log(decrypt("enpcraypdt tnhips moesosasge", 0));
//console.log(decrypt("Iueuan jrxuq cjythdykwxaj mixkqtaeml ebv wHenckvbkei rqdmt fHukckvi.r Jbxuihus, tmxayiwfuxh sjxau amenhtv 'zQkhhuubyjkit' yjew jhxux mxydatij. zJxmu hvymhihj ajel kldlsuyjb dyju yid uekdh qIbkqsxa xsxqqdvduzb wuqzhdoi qjxwu waueo xjem jfxuy dpuntj dgkvuiwj.", 42));