import './style.css';
import card from './card';
import deck from './deck';

const controlls = () => {
    const aDeck = deck();
    const aCard = card();
    
    
    
    const all = deck("all");
    console.log(all);
    const deckArray = [];
    deckArray.push(all);
    const table = deckArray;
    
    
    const controller = () => {
        
        const viewAll = () => {
            console.log('All cards are: ' + all);
            console.log('all decks are: ' + table);
            all.cardsArray.forEach(cardElement => {
                console.log('all' + cardElement);
            })
            controller();
        }
    
        const viewDeck = (name) => {
            let currentDeck; 
            let wasMatched = false;
            table.forEach(deckElement => {
                console.log('in for each')
                console.log(deckElement)
                console.log(currentDeck);
                console.log(typeof currentDeck);
                if(deckElement.deckName === name){
                    currentDeck = deckElement;
                    console.log(currentDeck);
                    console.log(typeof currentDeck);
                    wasMatched = true;
                    
                }  
            });
            if(wasMatched === false){
                    currentDeck = all;
                    console.log(currentDeck);
                    console.log(typeof currentDeck);
                
            }
            console.log("1" + currentDeck);
            console.log(typeof currentDeck);
            console.log(currentDeck.deckName + " contents are: ");
            currentDeck.cardsArray.forEach(cardElement => {
                console.log(cardElement);
            })
            controller();
        }

        const createDeck = (name) => {
            const thisDeck = deck(name);
            table.push(thisDeck);
            console.log( 'the deck created is: ' + thisDeck);
            console.log( 'its name is: ' + thisDeck.deckName);
        }
    
        const createCard = (name) => {
            const newCard = card(name); 
            all.cardsArray.push(newCard);
        }
    
        const getCard = (name) => {
            let theCard;
            all.cardsArray.forEach(cardElement => {
                if(cardElement.cardName === name){
                    theCard = cardElement;
                }
            })
            if(theCard === undefined){
                const cardName = prompt('that card does not exist, please enter another name:')
                theCard = getCard(cardName);
            }
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
            if(theDeck === undefined){
                const deckName = prompt('that deck does not exist, please enter another name:')
                theDeck = getDeck(deckName);
            }
            console.log(theDeck);
            return theDeck;
        }
    
        const addCardtoDeck = (thisCard, thisDeck) => {
            thisCard.cardDeck = thisDeck.deckName;
            thisDeck.cardsArray.push(thisCard.cardName);
        }
    
    
        const deleteCardFromDeck = (thisCard, thisDeck) => {
            const index = thisDeck.cardsArray.indexOf(thisCard.cardName);
            if (index > -1){
                thisDeck.cardsArray.splice(index, 1);
            }
            return thisDeck;
        }
    
        const deleteCard = (thisCard) => {
            const index = all.cardsArray.indexOf(thisCard);
            if (index > -1){
                all.cardsArray.splice(index, 1);
            }
            return all;
        }
    
        const deleteDeck = (aDeckName) => {
            const deckObj = getDeck(aDeckName);
            const index = table.indexOf(deckObj);
            if (index > -1){
                table.splice(index, 1);
            }
            return table;
        }
    
        const moveCard = (theCardName, deckOneName, deckTwoName) => {
            const thisCard = getCard(theCardName);
            const deckOne = getDeck(deckOneName);
            const deckTwo = getDeck(deckTwoName);
            console.log(thisCard, deckOne, deckTwo);
            deleteCardFromDeck(thisCard, deckOne);
            addCardtoDeck(thisCard, deckTwo);
        }

        const viewCard = (theCardName) => {
            const thisCard = getCard(theCardName);
            for (const prop in thisCard) {
                console.log(`obj.${prop} = ${thisCard[prop]}`);
              }
           }

    
       const setDate = (theCardName) => {
        const thisCard = getCard(theCardName);
        const aDate = prompt('enter the due date in the form of MM.DD.YY:');
        thisCard.cardDate = new Date(aDate);
       }

       const addStep = (theCardName) => {
        const thisCard = getCard(theCardName);
        const i = thisCard.cardSteps.length;
        thisCard.cardSteps[i] = prompt("enter your step:");
       }

       const setStep = (theCardName) => {
        const thisCard = getCard(theCardName);
        const i = prompt('what index?');
        thisCard.cardSteps[i] = prompt("enter your step:");
       }

       const setComplete = (theCardName) => {
        const thisCard = getCard(theCardName);
        thisCard.cardCompleteValue = Number(prompt("is your task complete? If so, enter a '1' otherwise eneter '0'."));
       }
    

       
    
        return {
            viewAll, viewCard, viewDeck, createCard, createDeck, getCard, getDeck, addCardtoDeck, deleteCardFromDeck, deleteCard, deleteDeck, moveCard, setDate, addStep, setComplete, setStep
        };
    }
    
    const control = controller();
    
    const starter = () => {
        const choice = prompt('choose a function: createDeck, or createCard, or viewDecks');
        if (choice === "createDeck"){
            const theDeckName = prompt('Deck name?');
            control.createDeck(theDeckName);
        }
        else if(choice === 'viewDeck'){
            const theDeckName = prompt('Deck name?');
            control.viewDeck(theDeckName);
        }
        else if(choice === 'createCard'){
            const theCardName = prompt('Card name?');
            control.createCard(theCardName);
        }
        else if (choice === 'viewAll'){
            control.viewAll();
        }
        else if (choice === 'addCardtoDeck'){
            const theCardName = prompt('what card?');
            const theCard = control.getCard(theCardName);
            const theDeckName = prompt('what deck?');
            console.log('using deck name: ' + theDeckName);
            const anDeck = control.getDeck(theDeckName);
            console.log('the deck entering the function is: ' + anDeck)
    
            control.addCardtoDeck(theCard, anDeck);
        }
        else if (choice === 'deleteCardFromDeck'){
            const theCardName = prompt('what card?');
            const theCard = control.getCard(theCardName);
            const theDeckName = prompt('what deck?');
            console.log('using deck name: ' + theDeckName);
            const anDeck = control.getDeck(theDeckName);
            console.log('the deck entering the function is: ' + anDeck)
    
            control.deleteCardFromDeck(theCard, anDeck);
        }
        else if (choice === 'deleteCard'){
            const theCardName = prompt('what card?');
            const thisCard = control.getCard(theCardName);
            control.deleteCard(thisCard);
        }
        else if (choice === 'deleteDeck'){
            const theDeckName = prompt('what deck?');
            control.deleteDeck(theDeckName);
        }
        else if (choice === 'moveCard'){
            const theCardName = prompt('what card?');
            const theFirstDeckName = prompt('from: (what deck?)');
            const theSecondDeckName = prompt('to: (what deck?)');
            control.moveCard(theCardName, theFirstDeckName, theSecondDeckName);
        }
        else if (choice === 'setDate'){
            const theCardName = prompt('what card?');
            control.setDate(theCardName);
        }
        else if (choice === 'addStep'){
            const theCardName = prompt('what card?');
            control.addStep(theCardName);
        }
        else if (choice === 'setStep'){
            const theCardName = prompt('what card?');
            control.setStep(theCardName);
        }
        else if (choice === 'setComplete'){
            const theCardName = prompt('what card?');
            control.setComplete(theCardName);
        }
        else if (choice === 'viewCard'){
            const theCardName = prompt('what card?');
            control.viewCard(theCardName);
        }

        const keepGoing = prompt('want to continue? y/n');
        if (keepGoing === 'y') {
            starter()
        };
    }
    
    starter();
    
};

export default controlls;

