import card from "./logic/card";

const serializeDeck = (deckObj, theDeckArray) => {
    const index = theDeckArray.indexOf(deckObj);
    const deckSerialized = JSON.stringify(deckObj);
    localStorage.setItem(`${index}`, deckSerialized);
}

const deserializeDeck = (index) => {
    const deckDeserialized = JSON.parse(localStorage.getItem(`${index}`));
    return deckDeserialized;
}

const serializeCurrentDeckIndex = (index) => {
    console.log(`index to be serialized is ${index}`);
    console.log(`the type is ${typeof index}`)
    const theCurrentDeckIndexSerialized = JSON.stringify(index);
    console.log(`theCurrentDeckIndexSerialized is ${theCurrentDeckIndexSerialized}`)
    console.log(`the type is ${typeof theCurrentDeckIndexSerialized}`)
    localStorage.setItem(`theCurrentDeckIndex`, theCurrentDeckIndexSerialized);
}

export const deserializeCurrentDeckIndex = () => {
    const unparsed = localStorage.getItem('theCurrentDeckIndex');
    console.log(`the unprsed result is: ${unparsed}`);
    const currentDeckIndexDeserialized = JSON.parse(localStorage.getItem('theCurrentDeckIndex'));
    console.log(`the currentDeckIndexDeserialized is ${currentDeckIndexDeserialized}`);
    return currentDeckIndexDeserialized;
}

const serializeCard = (cardObj, theAllDeck) => {
    const index = theAllDeck.cardsArray.indexOf(cardObj);
    const cardSerialized = JSON.stringify(cardObj);
    localStorage.setItem(`${index}`, cardSerialized);
}

const deserializeCard = (cardIndex) => {
    const cardDeserialized = JSON.parse(localStorage.getItem(`${cardIndex}`));
    return cardDeserialized;
}

const serializeAllCards = (aDeck) => {
    let index;
    const theDeck = aDeck;
    theDeck.cardsArray.forEach(cardObj => {
        index = theDeck.cardsArray.indexOf(cardObj);
        theDeck.cardsArray[index] = serializeCard(cardObj);
    });
    return theDeck;
}

export const deserializeAllCards = (aDeck) => {
    let index;
    const theDeck = aDeck;
    theDeck.cardsArray.forEach(cardObj => {
        index = theDeck.cardsArray.indexOf(cardObj);
        theDeck.cardsArray[index] = deserializeCard(index);
    })
}


export const deserializeAllDeck = (deckName) => {
    const theAllDeck = deserializeDeck(deckName);
    deserializeAllCards(theAllDeck);
    return theAllDeck;
}

const serializeAllDecks = (aDeckArray) => {
    aDeckArray.forEach(deckObj => {
        serializeDeck(deckObj);
    })
}

const serializeDeckArray = (aDeckArray) => {
    const theDeckArray = aDeckArray;
    const serAll = serializeAllCards(theDeckArray[0]);
    theDeckArray[0] = serAll;
    let index;
    theDeckArray.forEach(deckObj => {
        index = theDeckArray.indexOf(deckObj);
        if(index !== 0){
            theDeckArray[index] = serializeDeck(deckObj, aDeckArray);
        }
    })

    console.log(`the deck array tobe serialized is ${aDeckArray}`)
    const deckArraySerialized = JSON.stringify(aDeckArray);
    localStorage.setItem(`deckArray`, deckArraySerialized);
}

export const deserializeDeckArray = () => {
    let index;
    const deckArrayDeserialized = JSON.parse(localStorage.getItem('deckArray'));
    deckArrayDeserialized.forEach(serDeck => {
        index = deckArrayDeserialized.indexOf(serDeck);
        deckArrayDeserialized[index] = deserializeDeck(index)
    })
    return deckArrayDeserialized;
}

export const serializeData = (aDeckArray, aCurrentDeck) =>{
    const index = aDeckArray.indexOf(aCurrentDeck);
    console.log(`the index is ${index}`)
    console.log(`the currentDeck is ${aCurrentDeck.deckName}`)
    serializeCurrentDeckIndex(index);
    serializeDeckArray(aDeckArray);
}


