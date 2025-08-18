const guests = ["ANTONY", "CICERO", "CASSIUS", "CLEOPATRA"];

//Step 1: Add Brutus to beginning of list: 
guests.unshift("BRUTUS");

//Question 1: How can you verify Brutus was added to the beginning of the array? 
    //I used console.log(guests) to print the list out to the console and verify he was added to the beginning of the list. Can also use guests[0] to display just the first item. 

//Step 2:Add Augustus and Lucia to end of guest list: 
guests.push("AUGUSTUS", "LUCIA");

//Step 3: Check if Spartacus has been invited and if on list, what position: 
const spartacusIndex = (guests.indexOf("SPARTACUS")); 

//Question 2: What would the value of spartacusIndex be if "SPARTACUS" was not invited? 
    // The returned value would be -1. 

//Step 4: Remove Cassius from list: 
guests.splice(3, 1);

//Step 5: Extract first 3 guests on list to a new array to send them a special invite: 
const specialGuests = guests.slice(0,3);

//Step 6: Sort the array in alphabetic order, but keep Brutus, most honored guest, first. 
const honoredGuests = guests.slice(0,1);
const sortedList = guests.slice(1).sort();
const newSortedList = honoredGuests.concat(sortedList);

console.log(newSortedList);


