import layout from "./GUILayout";
import { drawDecks, styleCurrent, styleDecks } from "./GUIDecks";
//DRAW page, deck area, card area, default decks and default top card

let isInitialLoad = 0;

const drawGUIInitial = (aDeckArray) => {
    layout();
    drawDecks(aDeckArray);
}

const drawGUI = (aDeckArray, aCurrentDeck) => {
    drawDecks(aDeckArray);
    const currentDeckDiv = document.querySelector(`[data-title="${aCurrentDeck.deckName}"]`);
    styleCurrent(currentDeckDiv);  
}

const loadGUI = (aDeckArray, aCurrentDeck) => {
    if(isInitialLoad === 0){
        drawGUIInitial(aDeckArray, aCurrentDeck);
        isInitialLoad = 1;
    }
    else{
        drawGUI(aDeckArray, aCurrentDeck);
    }
}

export default loadGUI;






