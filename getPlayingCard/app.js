//Write a getCard() function which returns a random playing card object like: 
//   { 
//      value: 'K'
//      suit: 'clubs'}
//   }

//Pick a random value from: 
//-----2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A
//Pick a random suit from: 
//-----clubs, spades, hearts, diamonds
//Return both in an object

//Accepts no arguments

function getCard(){
    const cardValue = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
    const cardSuit = ["clubs", "spades", "hearts", "diamonds"]; 

    let randomCard = {}; 
    randomCard.cardValue = cardValue [Math.floor(Math.random() * cardValue.length)];
    randomCard.cardSuit = cardSuit [Math.floor(Math.random() * cardSuit.length)]

    console.log(randomCard);

}

getCard(); 