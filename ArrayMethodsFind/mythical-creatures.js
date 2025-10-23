const mythicalCreatures = [
	{name: "Dragon", type: "Fire", lastSeen: "Volcano Valley"},
	{name: "Mermaid", type: "Water", lastSeen: "Coral Caves"},
	{name: "Unicorn", type: "Land", lastSeen: "Enchanted Forest"},
	{name: "Griffin", type: "Air", lastSeen: "Highwind Mountains"},
	{name: "Kraken", type: "Water", lastSeen: "Abyssal Depths"}
];

//use find to locate first creature of the water type and log its name into the console: 
const waterCreature = mythicalCreatures.find(function(creature){
	return creature.type === "Water";
})
console.log(`The first creature of the water type is the ${waterCreature.name}.`);

//use findIndex to locate the index of the Griffin in the array and log it into the console: 
const griffinIndex = mythicalCreatures.findIndex(function(creature){
	return creature.name === "Griffin";
})
console.log(`Index of Griffin is ${griffinIndex}.`);

//use find to locate the first creature last seen in the Enchanted Forest: 
const enchantedForestCreature = mythicalCreatures.find(function(creature){
	return creature.lastSeen === "Enchanted Forest";
})

console.log(`The last creature seen in the Enchanted Forest is the ${enchantedForestCreature.name}.`)