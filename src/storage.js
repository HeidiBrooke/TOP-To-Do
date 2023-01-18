const serlializeDeck = (deckObj) => {
    const deckSerialized = JSON.stringify(deckObj);
    localStorage.setItem(`${deckObj.deckName}`, deckSerialized);
}

const deserializeDeck = (deckName) => {
    const deckDeserialized = JSON.parse(localStorage.getItem(`${deckName}`));
    return deckDeserialized;
}

const serlializeCurrentDeckIndex = (index) => {
    console.log(`index to be serialized is ${index}`);
    const theCurrentDeckIndexSerialized = JSON.stringify(index);
    localStorage.setItem(`theCurrentDeckIndex`, theCurrentDeckIndexSerialized);
}

export const deserializeCurrentDeckIndex = () => {
    const currentDeckIndexDeserialized = JSON.parse(localStorage.getItem('theCurrentDeckIndex'));
    return currentDeckIndexDeserialized;
}

const serializeCard = (cardObj) => {
    const cardSerialized = JSON.stringify(cardObj);
    localStorage.setItem(`${cardObj.cardName}`, cardSerialized);
}

const deserializeCard = (cardName) => {
    const cardDeserialized = JSON.parse(localStorage.getItem(`${cardName}`));
    return cardDeserialized;
}

const serlializeDeckArray = (aDeckArray) => {
    console.log(`the deck array tobe serialized is ${aDeckArray}`)
    const deckArraySerialized = JSON.stringify(aDeckArray);
    localStorage.setItem(`deckArray`, deckArraySerialized);
}

export const deserializeDeckArray = () => {
    const deckArrayDeserialized = JSON.parse(localStorage.getItem('deckArray'));
    return deckArrayDeserialized;
}

export const serializeData = (aDeckArray, aCurrentDeck) =>{
    const index = aDeckArray.indexOf(aCurrentDeck);
    console.log(`the index is ${index}`)
    console.log(`the currentDeck is ${aCurrentDeck.deckName}`)
    serlializeCurrentDeckIndex(index);
    serlializeDeckArray(aDeckArray);
}


