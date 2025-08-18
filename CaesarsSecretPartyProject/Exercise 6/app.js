const guests = {
  ANTONY: {
    title: "General",
    region: "Rome",
    dietaryPreference: "Vegetarian",
    pastGifts: ["Golden Laurel", "Chariot"]
  },
  CICERO: {
    title: "Orator",
    region: "Arpinum",
    dietaryPreference: "Omnivore",
    pastGifts: ["Scroll of Proverbs", "Quill"]
  }
};

//Step 1: Add Brutus to the guest directory. 

guests.BRUTUS = {
    title : "Senator", 
    region: "Rome",
    dietaryPreference: "Vegan", 
    pastGifts: ["Silver Dagger", "Marble Bust"]
}

//Step 2: Update Cicero's gifts to include "GOlden Lyre"
guests.CICERO.pastGifts.push("Golden Lyre");

//Step 3: Retrieve the region of Antony: 
const antonyRegion = guests.ANTONY.region;

//Step 4: Remove Cicero from guest list: 
delete guests.CICERO; 

//Step 5: Assign Antony's profile to a new variable name generalProfile. Then, using the new variable, change the region to Egypt: 
const generalProfile = guests.ANTONY; 
generalProfile.region = "Egypt";

//Question 1: After step 5, what will be the region of Antony in original guest list: 
    //Egypt because both objects point to the same point in memory.  When one object is updated, the other is as well. 

