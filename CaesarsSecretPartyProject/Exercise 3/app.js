//Step 1: Generate a decimal between 0 and 1
const randomDecimal = Math.random();

//Step 2: Determine the desired range of numbers for our secret shift value (between 3 and 33)
const range = 33 - 3 + 1; //range of numbers is 31 

//Question 1: Why did we add 1 to the difference between 33 and 3? 
    //We need to add one to include the endpoints of the range. 33-3 gives us 30, but there are 31 possible numbers if we are including both 3 and 33, so we need to add the one to account for all the possible numbers. 

//Step 3: Use random decimal from step 1 and adjust its value to fit within the desired range in step 2. 
const numInRange = randomDecimal*range;

//Question 2: How does multiplying randomDecimal by range help us get a number within our desired range. 
    //The randomDecimal returns a number from 0 to 1. By multiplying the decimal by the range, it turns our decimal into a number that falls within our range. 

//Step 4: Round decimal to a whole integer: 
const randomInt = Math.floor(numInRange);

//Question 3: Why do we use Math.floor() function instead of other rounding methods like Math.round()?
    //Using Math.floor ensures our random number stays within range. Math.round may round to a number out of our desired range. 

//Step 5: Adjust integer to fit wihtin the range of 3 to 33 inclusive: 
const randomShift = randomInt + 3; 

//Question 4: How does adding to randomInt ensure that our final shiftValue is between 3 and 33? 
    //So far our code was only giving us numbers 0 to 30. By adding 3 to the value, it pushes the returned value into our desired range of 3 to 33. 

//console.log(randomShift);    used to test along the way.


