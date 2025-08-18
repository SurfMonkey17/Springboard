const emblemClue1 = 'Eagle';
const emblemClue2 = 'Laurel';
const emblemClue3 = 7;

let partyLocation = '';

if (emblemClue1 === 'Eagle') {
    partyLocation = 'Forum';
}

else if (emblemClue2 === 'lion') {
    partyLocation = 'Colosseum';
}
 
else {
    partyLocation = 'Villa';
}

if (emblemClue2 === 'Laurel' && partyLocation === 'Forum') {
    partyLocation += ' of Augustus';
}

else if (emblemClue2 === 'Grapes' || partyLocation === 'Villa') {
    partyLocation += ' of Pompey';
}

switch (emblemClue3) {
    case 3: 
        partyLocation += ' South';
        break;
    case 4: 
        partyLocation += ' East';
        break;
    case 7: 
        partyLocation += ' North';
        break;
    case 9:
        partyLocation += ' West';
}

console.log(partyLocation);

//Question: Why is it important to be careful when using == instead of === in our conditionals? 
    //Double equals (==) only evaluates the value, not the type, which can have unintended consequences.  It is better to use triple equals as it evaluates type and value. 