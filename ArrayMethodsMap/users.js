const users = [
	{firstName: "Alice", lastName: "Johnson", points: 120},
	{firstName: "Bob", lastName: "Smith", points: 99},
	{firstName: "Charlie", lastName: "Brown", points: 180}
];

//create new array with new properties (fullName and membershipStatus)

const membershipStatus = users.map(function(user){
	const fullName = `${user.firstName} ${user.lastName}`;
	const status = user.points > 100 ? "premium" : "standard";
	
	return {fullName: fullName, membershipStatus: status};
})

console.log(membershipStatus);


