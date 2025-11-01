/* Task 1: No Parameters: Activate Hyperdrive */
// TODO: Write an arrow function named `activateHyperdrive` with no parameters that print `"Hyperdrive activated!"` to the console. Call `activateHyperdrive` to test it.

const activateHyperdrive = () => console.log("Hyperdrive activated!");
activateHyperdrive();

/* Task 2: Implicit Return: Scan for Lifeforms */
// TODO: Create an arrow function named `scanForLife` that implicitly returns `"No lifeforms detected"` without using curly braces. Print the result of calling `scanForLife`.
const scanForLife = () => "No lifeforms detected";
console.log(scanForLife());

/* Task 3: Implicit Return with Objects: Log Coordinates */
// TODO: Write an arrow function named `currentCoordinates` that returns an object with properties `x`, `y`, and `z`, representing coordinates in space. Use implicit return. Print the returned object from `currentCoordinates`.
const currentCoordinates = () => ({x: 42, y: 87, z: 91});    //had to look at solution for this one.  Wasn't sure where coordinates were supposed to be coming from. Guessing they were just made up for this exercise?
console.log(currentCoordinates);

/* Task 4: Understanding `this`: Message from Home Base */
// TODO: Inside an object named `spacecraft`, create a method named `receiveMessage` using arrow function syntax. This method should log `"Message received: "` followed by a message it receives as a parameter. Directly call `receiveMessage` within `spacecraft` and observe. Observe and explain the behavior of `this` in this context as a comment.

const spacecraft = {
    name: "Galactic Voyager",

    receiveMessage: (message) => 
    {
        console.log(`Message received: ${message}`);
        console.log(`This spacecraft is: ${this.name}`);
    }
};

spacecraft.receiveMessage("Hello from Earth!");



/*
 * Observations:
 * TODO: Explain here.
 * I once again had to look at the solution for this. I did write my own code, but couldn't figure out how 'this' was to be incorporated in this instance.  I do understand that arrow functions do not have their own 'this' and it is inherited from the parent or global scope. 
 */
