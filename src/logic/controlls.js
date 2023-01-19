import "../style.css";
import card from "./card";
import deck from "./deck";

export const theAllDeck = deck("all");
export const deckArray = [];
deckArray.push(theAllDeck);
export const table = deckArray;
export const defaultDeck = deck('To-Do');
export const defaultCard = card('Get Groceries');
export const defaultCard2 = card('Mail Thank You Notes');
theAllDeck.cardsArray.push(defaultCard);
theAllDeck.cardsArray.push(defaultCard2);
defaultCard.cardSteps.push(`This is task card.`);
defaultCard.cardSteps.push(`Click on any text field to edit the property`);
defaultCard.cardSteps.push(`Press the next arrow to the right to see the next card.`);
defaultCard2.cardSteps.push(`Click the delete button on a card to remove from the current (selected) deck.`);
defaultCard2.cardSteps.push(`To permanently delete a card, delete from the all deck.`);
defaultCard2.cardSteps.push(`Create cards or decks by pressing the '+' buttons.`);
defaultCard2.cardSteps.push(`More great features and Local Storage coming soon!`);
defaultDeck.cardsArray.push(defaultCard.cardName);
defaultDeck.cardsArray.push(defaultCard2.cardName);
deckArray.push(defaultDeck);


    const viewAll = () => {
      console.log(`All cards are: ${theAllDeck}`);
      console.log(`all decks are: ${table}`);
      theAllDeck.cardsArray.forEach((cardElement) => {
        console.log(`all + ${cardElement}`);
      });
    };

    const viewDeck = (name) => {
      let currentDeck;
      let wasMatched = false;
      table.forEach((deckElement) => {
        console.log("in for each");
        console.log(deckElement);
        console.log(currentDeck);
        console.log(typeof currentDeck);
        if (deckElement.deckName === name) {
          currentDeck = deckElement;
          console.log(currentDeck);
          console.log(typeof currentDeck);
          wasMatched = true;
        }
      });
      if (wasMatched === false) {
        currentDeck = theAllDeck;
        console.log(currentDeck);
        console.log(typeof currentDeck);
      }
      console.log(typeof currentDeck);
      console.log(`${currentDeck.deckName} contents are: `);
      currentDeck.cardsArray.forEach((cardElement) => {
        console.log(cardElement);
      });
      
    };

    export const createDeck = (name) => {
        // const theName = prompt('What is the name of teh deck?')
      const thisDeck = deck(name);
      table.push(thisDeck);
      // console.log("the deck created is: " + thisDeck);
      // console.log("its name is: " + thisDeck.deckName);
    };

    export const addCardtoDeck = (thisCard, thisDeck) => {
        thisCard.cardDeck = thisDeck.deckName;
        thisDeck.cardsArray.push(thisCard.cardName);
        console.log(thisDeck);
      };

    

    export const getCard = (name) => {
        // console.log(name)
      let thisCard;
      // console.log(thisCard);
      // console.log(all.length);
      console.log(theAllDeck.cardsArray);
      theAllDeck.cardsArray.forEach((cardElement) => {
        // console.log(cardElement.cardName);
        // console.log(name);
        if (cardElement.cardName === name) {
          console.log(`${cardElement.cardName} === ${name}`);
          thisCard = cardElement;
          console.log(thisCard);
        }
      });
    //   if (theCard === undefined) {
    //     // const cardName = prompt(
    //     //   "that card does not exist, please enter another name:"
    //     // );
    //     // theCard = getCard(cardName);
    //   }
      //console.log(`the card getting returned is: ${thisCard.cardName}`)
      return thisCard;
    };

    export const getDeck = (name) => {
      console.log('GETTING DECK');
      let theDeck;
      console.log(`the deck array is ${deckArray}`);
      deckArray.forEach(deckElement => {
        console.log("the  deck name is: " + deckElement.deckName);
        if (deckElement.deckName === name) {
          console.log("it matched!");
          console.log(deckElement.deckName, name);
          theDeck = deckElement;
        }
        
      });
      console.log("getting deck: " + theDeck.deckName);
      console.log(theDeck);
      return theDeck;
    };

    export const createCard = (name) => {
      const newCard = card(name);
    theAllDeck.cardsArray.push(newCard);
    console.log(theAllDeck.cardsArray);
    return newCard;
    
    };

    

    export const deleteCardFromDeck = (thisCard, thisDeck) => {
      const index = thisDeck.cardsArray.indexOf(thisCard.cardName);
      if (index > -1) {
        thisDeck.cardsArray.splice(index, 1);
      }
      return thisDeck;
    };

    export const deleteCard = () => {
      console.log('deleting')
      const cardDiv = document.getElementById('cardTitle');
      const aCardName = cardDiv.textContent;
      const thisCard = getCard(aCardName);
      const index = theAllDeck.cardsArray.indexOf(thisCard);
      if (index > -1) {
        theAllDeck.cardsArray.splice(index, 1);
      }
      console.log(theAllDeck);
      return theAllDeck;
    };

    export const deleteDeck = (aDeckName) => {
      console.log('DELETEING DECK IN CONTROLLS')
      console.log(`deck name is ${aDeckName}`)
      const deckObj = getDeck(aDeckName);
      console.log(`go the deck object called ${deckObj.deckName}`);
      const index = deckArray.indexOf(deckObj);
      if (index > -1) {
        deckArray.splice(index, 1);
      }
      console.log(`DECK ARRAY IS ${deckArray}`);
      return deckArray;
    };

    const moveCard = (theCardName, deckOneName, deckTwoName) => {
      const thisCard = getCard(theCardName);
      const deckOne = getDeck(deckOneName);
      const deckTwo = getDeck(deckTwoName);
      console.log(thisCard, deckOne, deckTwo);
      deleteCardFromDeck(thisCard, deckOne);
      addCardtoDeck(thisCard, deckTwo);
    };

    // const viewCard = (theCardName) => {
    //   const thisCard = getCard(theCardName);
    //   for (const prop in thisCard) {
    //     console.log(`obj.${prop} = ${thisCard[prop]}`);
    //   }
    // };

    // const setDate = (theCardName) => {
    //   const thisCard = getCard(theCardName);
    //   const aDate = prompt("enter the due date in the form of MM.DD.YY:");
    //   thisCard.cardDate = new Date(aDate);
    // };

    // const addStep = (theCardName) => {
    //   const thisCard = getCard(theCardName);
    //   const i = thisCard.cardSteps.length;
    //   thisCard.cardSteps[i] = prompt("enter your step:");
    // };

    // const setStep = (theCardName) => {
    //   const thisCard = getCard(theCardName);
    //   const i = prompt("what index?");
    //   thisCard.cardSteps[i] = prompt("enter your step:");
    // };

    // const setComplete = (theCardName) => {
    //   const thisCard = getCard(theCardName);
    //   thisCard.cardCompleteValue = Number(
    //     prompt(
    //       "is your task complete? If so, enter a '1' otherwise eneter '0'."
    //     )
    //   );
    // };



