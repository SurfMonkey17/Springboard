//Write a isValidPassword function
//It accespts 2 arguments: password and username
//Password must: 
//  -be at least 8 characters
//  -cannot contain spaces
//  -cannot contain the username
//If all requirements are met, return true.
//Otherwise: false

//isValidPassword("89Fjjlnms", "dogLuvr");   //true
//isValidPassword("dogLuvr123!", "dogLuvr")  //false

function isValidPassword(password, username) {
    return (password.length >= 8 && !password.includes(" ") && !password.includes(username))
}


isValidPassword("89Fjjlnms", "dogLuvr");   
isValidPassword("dogLuvr123!", "dogLuvr");