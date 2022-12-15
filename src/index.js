import './style.css';
import card from './card';
import deck from './deck';

const aDeck = deck();
const aCard = card();



const all = [];
const deckArray = [];
const table = deckArray;


const controller = () => {
    // let thisCard;
    // let thisDeck;
    
    const viewAll = () => {
        console.log('All cards are: ' + all);
        console.log('all decks are: ' + table);
        all.forEach(cardElement => {
            console.log('all' + cardElement);
        })
        controller();
    }

    const viewDeck = () => {
        const thisDeck = prompt("deck name:");
        let currentDeck; 
        table.forEach(deckElement => {
            console.log(deckElement)
            console.log(currentDeck);
            console.log(typeof currentDeck);
            if(deckElement.deckName === thisDeck){
                currentDeck = deckElement;
                console.log(currentDeck);
                console.log(typeof currentDeck);
            }
            else {
                currentDeck = all;
                console.log(currentDeck);
                console.log(typeof currentDeck);
            }
            
        });
        console.log(currentDeck);
        console.log(typeof currentDeck);
        console.log(typeof currentDeck.cardsArray[0]);
        console.log(currentDeck.deckName + " contents are: ");
        currentDeck.cardsArray.forEach(cardElement => {
            console.log(cardElement);
        })
        controller();
    }
    const createDeck = (name) => {
        const thename = prompt("deck name:");
        const thisDeck = deck(thename);
        table.push(thisDeck);
        console.log( 'the deck created is: ' + thisDeck);
        console.log( 'its name is: ' + thisDeck.deckName);
    }

    const createCard = (name) => {
        const thename = prompt("card name:");
        const newCard = card(thename); 
        all.push(newCard);
    }

    const getCard = (name) => {
        let theCard;
        all.forEach(cardElement => {
            if(cardElement.cardName === name){
                theCard = cardElement;
            }
            else {
                theCard = null;
            }
            
        })
        return theCard;
    }

    const getDeck = (name) => {
        let theDeck;
        table.forEach(deckElement => {deck
            console.log('the  deck name is: ' + deckElement.deckName)
            if(deckElement.deckName === name){
                console.log('it matched!')
                console.log(deckElement.deckName, name);
                theDeck = deckElement;
            }
            console.log('getting deck: ' + theDeck);
            
        })
        return theDeck;
    }

    const addCardtoDeck = (thisCard, esoDeck) => {
        console.log(esoDeck.deckName);
        thisCard.cardDeck = esoDeck.deckName;
        esoDeck.cardsArray.push(thisCard);
    }

    return {
        viewAll, viewDeck, createCard, getCard, getDeck, addCardtoDeck, createDeck
    };
}

const game = controller();

const starter = () => {
    const choice = prompt('choose a function: createDeck, or createCard, or viewDecks');
    if (choice === "createDeck"){
        game.createDeck();
    }
    else if(choice === 'viewDeck'){
        game.viewDeck();
    }
    else if(choice === 'createCard'){
        game.createCard();
    }
    else if (choice === 'viewAll'){
        game.viewAll();
    }
    else if (choice === 'addCardtoDeck'){
        const theCardName = prompt('what card?');
        const theCard = game.getCard(theCardName);
        const theDeckName = prompt('what deck?');
        console.log('using deck name: ' + theDeckName);
        const anDeck = game.getDeck(theDeckName);
        console.log('the deck entering the function is: ' + anDeck)

        game.addCardtoDeck(theCard, anDeck);
    }
    const keepGoing = prompt('want to continue? y/n');
    if (keepGoing === 'y') {
        starter()
    };
}

starter();
