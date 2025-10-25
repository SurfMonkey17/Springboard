/* Task 1: Declare a Destination Variable */
// TODO: Use `let` to declare a variable named `destination` and assign it the value `"Ancient Egypt"`. Print the destination to the console.
let destination = "Ancient Egypt";
console.log(destination);

/* Task 2: Change the Destination */
// TODO: Now, change the `destination` variable to `"Medieval Europe"`. Print the new destination to the console.
destination = "Medieval Europe";
console.log(destination);

/* Task 3: Declare a Constant Travel Date */
// TODO: Use `const` to declare a variable named `travelDate` and set it to `"2024-03-15"`. Try to change the `travelDate` to another value and observe and explain what happens as a comment.
const travelDate = "2024-03-15";
console.log(travelDate);
// travelDate = "2024-10-12"; 
// console.log(travelDate);  //This results in a TypeError. Commented it out to be able to run rest of code below. 

/*
 * Observations:
 * TODO: Explain here.
 * Trying to update travelDate results in an "Uncaught TypeError: Assignment to constant variable".  Const variables cannot be reassigned for primitive types. 
 */

/* Task 4: Experiment with Variable Hoisting */
// TODO: Before declaring any variable, try to print a variable named `timeMachineModel` to the console. Then, declare `timeMachineModel` using `var` and assign it the value `"T-800"`. Observe and explain what happens as a comment.
console.log(timeMachineModel); 
var timeMachineModel = "T-800"; 
/*
 * Observations:
 * TODO: Explain here.
 * This returns undefined. The variable is hoisted to the top when code is compiled, but is not yet initialized, so it returns "undefined". 
 */
