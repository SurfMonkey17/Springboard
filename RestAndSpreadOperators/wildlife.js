/* Task 1: Track Animal Sightings */
// TODO: Write a function with rest parameters to print sightings of different animals within the sanctuary. This function should accept an arbitrary number of animal names.

function animalSightings(...animals){
	for (animal of animals){
		console.log(animal);
	}
}
animalSightings("bear", "penguin", "moose", "camel"); 

/* Task 2: Merge Habitat Areas */
const forestHabitats = ["Forest A", "Forest B"];
const savannahHabitats = ["Savannah C", "Savannah D"];
// TODO: You are given two arrays of habitat names. Use the spread operator to combine them into a comprehensive list of protected areas within the sanctuary.
const protectedHabitats = [...forestHabitats, ...savannahHabitats];
console.log(`Protected areas: ${protectedHabitats}`);

/* Task 3: Update Conservation Status */
const rhinoStatus = {
	population: 500,
	status: "Endangered"
};
// TODO: You are given an object representing an animal's conservation status. Use the spread operator to update this status with new information, such as an increase in population or a change in habitat.

const newRhinoStatus = {...rhinoStatus, population: 900, habitat: "Savannah" }; 
console.log(newRhinoStatus);

/* Task 4: Catalog Genetic Diversity */
const lionProfile = {
	name: "Leo",
	age: 5,
	species: "Lion"
};
// TODO: Duplicate an animal profile object using a shallow copy. Add genetic diversity information using the `genetics` property to this copy. Observe and explain how changes to nested properties affect both the original and the copied object.

const lionProfile2 = {...lionProfile, genetics: "diverse"};
console.log(lionProfile2);
/*
 * Observations:
 * TODO: Explain here.
 * Copying using spread only creates a shallow copy, but as there are no nested objects, updating the copy does not affect the original.   
 */

/* Task 5: Analyze Ecosystem Health */
const ecosystemHealth = {
	waterQuality: "Good",
	foodSupply: {
		herbivores: "Abundant",
		carnivores: "Sufficient"
	}
};
// TODO: You are given an object with a nested structure detailing the ecosystem's health, including water quality and food supply. Perform a shallow copy and modify a nested property. Observe and explain how changes to nested properties affect both the original and the copied object.

const ecosystemHealth2 = {...ecosystemHealth};
ecosystemHealth2.foodSupply.carnivores = "Abundant";
console.log(ecosystemHealth.foodSupply.carnivores === ecosystemHealth2.foodSupply.carnivores); 



/*
 * Observations:
 * TODO: Explain here.
 * Only a shallow copy was created, so the nested objects still reference the same objects in memory. So when we updated the carnivores in ecosystemHealth2, it also updated the original as it has the same memory reference. 
 */
