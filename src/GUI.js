import layout from "./GUILayout";
import { drawDecks, styleCurrent, styleDecks } from "./GUIDecks";
import drawNewDeckForm from "./GUINewDeck";
//DRAW page, deck area, card area, default decks and default top card

let isInitialLoad = 0;

const drawGUIInitial = (aDeckArray) => {
    layout();
    drawDecks(aDeckArray);
}

const drawGUI = (aDeckArray, aCurrentDeck, formValue, cardViewValue) => {
    drawDecks(aDeckArray);
    const currentDeckDiv = document.querySelector(`[data-title="${aCurrentDeck.deckName}"]`);
    styleCurrent(currentDeckDiv);  
    drawNewDeckForm(formValue);    
}

const loadGUI = (aDeckArray, aCurrentDeck, formValue, cardViewValue) => {
    console.log(`initial load is ${isInitialLoad}`);
    if(isInitialLoad === 0){
        console.log('is initial load');
        drawGUIInitial(aDeckArray, aCurrentDeck);
        isInitialLoad = 1;
    }
    else{
        drawGUI(aDeckArray, aCurrentDeck, formValue, cardViewValue);
    }
}

export default loadGUI;






