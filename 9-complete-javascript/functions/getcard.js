/* 
write a getCard() function which returns a random playing card object, like
{
    value: 'K',
    suit: 'clubs'
}
pick a random value from
-- 1,2,3,4,5,6,7,8,9,10,J,Q,K,A
pick a random quit from
clubs, spades, hearts, diamonds
return both in an object
*/
function getCard(){
    let value;
    let randNum = Math.floor(Math.random()*14)+1;
    if(randNum===11){
        value = 'J';
    }
    else if(randNum===12){
        value = 'Q';
    }
    else if(randNum===13){
        value = 'K';
    }
    else if(randNum===14){
        value = 'A';
    }
    else{
        value = randNum;
    }
    let suit;
    let randSuit = Math.floor(Math.random()*4)+1;
    switch(randSuit){
        case 1:
            suit= 'clubs';
            break;
        case 2:
            suit = 'spades';
            break;
        case 3:
            suit = 'hearts';
            break;
        case 4:
            suit = 'diamonds';
            break;
    }
    return {value: value,suit: suit}
}
console.log(getCard())