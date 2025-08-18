//FizzBuzz

//Given positive int < 100. 

function fizzBuzz(num) {
    if (num > 0 && num < 100) {

//For every number up to n (included):

//if number divisible by 3 and 5, print "FizzBuzz":
        if (num % 3 === 0 && num % 5 === 0) {
            console.log ("FizzBuzz");
        }

//Else if the number is divisible by 3, print "Fizz":
        else if (num % 3 === 0) {
            console.log("Fizz");
        }

//Else if the number is divisible by 5, print "Buzz": 
        else if (num % 5 === 0) {
            console.log("Buzz")
        }
    

//Else if not divisible by 3 or 5, print the number: 
        else { 
            console.log(num);
        }
    }


//Else: print "Error" and stop the execution:
    else {
        console.log("Error");
    }

}

fizzBuzz(15);
fizzBuzz(33);
fizzBuzz(50);
fizzBuzz(79);
fizzBuzz(100);

