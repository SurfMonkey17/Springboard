//FizzBuzz

//If given num is not positive int < 100, print "Error":

function fizzBuzz(num) {
    if (num < 1 || num > 99) {
        console.log("Error");
    }

//For every number up to n (included):

    else {
    
        for (let i = 1; i <= num; i++){

            //if i divisible by 3 and 5, print "FizzBuzz":
            if (i % 3 === 0 && i % 5 === 0) {
                console.log ("FizzBuzz");
            }

            //Else if i is divisible by 3, print "Fizz":
            else if (i % 3 === 0) {
                console.log("Fizz");
            }

            //Else if i is divisible by 5, print "Buzz": 
            else if (i % 5 === 0) {
                console.log("Buzz")
            }
    

            //Else if not divisible by 3 or 5, print the number: 
            else { 
                console.log(i);
            }
        }
    }
}

fizzBuzz(16);
// fizzBuzz(50);
// fizzBuzz(79);
// fizzBuzz(100);
// fizzBuzz(0);
// fizzBuzz(-1);

