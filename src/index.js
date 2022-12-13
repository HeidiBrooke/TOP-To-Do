import './style.css';
import card from './card';
import deck from './deck';

const deckArray = [];
// const allCardArray = () =>{
//     const allCardsName = 'All';
//     const allCards = [];
//     return{
//         allCardsName, allCards
//     };
// };

const all = [];
deckArray.push(all);


const controller = () => {
    //console.log("Enter thisApp.createCard(name, deck) to create a card.");
    //console.log("Enter thisApp.createDeck(name) to create a deck.");
    //console.log("Enter thisApp.viewDeck(name) to view the contents of a deck.");
    

    const createDeck = (name) => {
        const adeck = prompt('enter a name for a deck');
        const newDeck = deck(adeck);
        console.log(newDeck);
        deckArray.push(newDeck);
        controller();
        // return{newDeck};
    };
    
    const createCard = (name, aDeck) => {
        const aname = prompt('enter a name for a card');
        const thisDeck = prompt('enter a name of a deck');
        const newCard = card(aname, thisDeck);
        console.log(thisDeck);
        console.log(typeof thisDeck);
        console.log(newCard);  
        all.push(newCard);

        let currentDeck; 
        deckArray.forEach(deckElement => {
            console.log(deckElement)
            currentDeck = thisDeck;
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
        currentDeck.cardsArray.push(newCard);
        controller();
    };

    const viewAll = () => {
        console.log('All cards are: ' + all);
        console.log('all decks are: ' + deckArray);
        all.forEach(cardElement => {
            console.log(cardElement);
        })
        controller();
    }

    const viewDeck = () => {
        const aDeck = prompt("deck name:");
        let currentDeck; 
        deckArray.forEach(deckElement => {
            console.log(deckElement)
            currentDeck = aDeck;
            console.log(currentDeck);
            console.log(typeof currentDeck);
            if(deckElement.deckName === aDeck){
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

    return {
         createCard, createDeck, viewAll, viewDeck
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
    const keepGoing = prompt('want to continue? y/n');
    if (keepGoing === 'y') {
        starter()
    };
}

starter();



// const div = document.createElement('div');
// div.setAttribute('id', 'content');
// document.body.appendChild(div);

// div.textContent = "Hi";