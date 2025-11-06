/* Task 1: Compile Participant Details with Shorthand Property Names */
// TODO: Construct an object named `participant` with properties for `name`, `age`, and `studyField`. Utilize shorthand property names to simplify your code.

let name = "Joe";
let age = "25";
let studyField = "biology";

const participant = {
    name, 
    age,
    studyField
};

/* Task 2: Implement a Shorthand Function for Participant Info */
// TODO: Copy the `participant` object by adding a shorthand method named `displayInfo` that prints the participant's details using `this` and a template string.

const participantCopy = {

    ...participant, 
    
    displayInfo() {

    console.log(`Participant's Details: Name: ${this.name}, Age: ${this.age}, Field of Study: ${this.studyField}`); }

};

participantCopy.displayInfo();



/* Task 3: Implement a Same Shorthand Arrow Function for Participant Info */
// TODO: Echo the above task with an arrow function. Observe the behavior of `this` and explain your findings.

const participantCopy2 = {

    ...participant, 
    
    displayInfo: () => {

    console.log(`Participant's Details: Name: ${this.name}, Age: ${this.age}, Field of Study: ${this.studyField}`); 

    }

};

participantCopy2.displayInfo(); 




/*
 * Observations:
 * TODO: Explain here.
 * 
 * Arrow functions do not have their own "this". It is inherited from parent or global scope, so when using "this", it is not referring to the object and thus returns undefined. 
 */

/* Task 4: Using Computed Property Names */
// TODO: Implement a function named `updateParticipantInfo` that takes a property name and value as arguments alongside an object and returns a new object with that property dynamically set.

function updateParticipantInfo (participant, key, value){
    return { 
        ...participant, 
        [key]: value
    };
}; 

const updatedParticipant = updateParticipantInfo(participant, "projectTitle", "Quantum Computing Study");  
console.log(updatedParticipant);


