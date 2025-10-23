
//filter out all numbers that are less than 10 and create a new array containing only those numbers
//print new array

// Starter code
const numbers = [2, 102, 324, 493, 598, 29482, 3, 6, 29, 184, 5, 10, 111] 

const bigNumbers = numbers.filter(function(val){
    return val >= 10; 
})

console.log(bigNumbers);

