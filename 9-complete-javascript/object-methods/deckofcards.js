function makeDeck() {
    const deck = []
    const suits = ['hearts', 'diamonds', 'spades', 'clubs'];
    const values = '1,2,3,4,5,6,7,8,9,10,J,Q,K,A';
    for(let value of values.split(',')){
        for(let suit of suits){
            deck.push({value,suit})
        }
    }
    return deck;
}

function drawCard(deck){
    return deck.pop()
}


const myDeck = makeDeck();
const card1 = drawCard(myDeck);










// makeDeck(){
//     [
//         {value: '5',suit:'hearts'}
//     ]
// }