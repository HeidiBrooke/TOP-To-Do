import layout from "./GUILayout";
import { drawDecks, styleCurrent} from "./GUIDecks";
import drawCards from "./GUICards";
import drawNewDeckForm from "./GUINewDeck";
import {drawNewCardForm} from "./GUINewCard";
//DRAW page, deck area, card area, default decks and default top card

let isInitialLoad = 0;

const drawGUIInitial = (aDeckArray, aCurrentDeck, cardViewValue, currentCard) => {
    layout();
    drawDecks(aDeckArray);
    // console.log(`current card passed in is ${currentCard.cardName}`);
    drawCards(aCurrentDeck, cardViewValue, currentCard);
    
}

const drawGUI = (aDeckArray, aCurrentDeck, formValue, cardViewValue, currentCard) => {
    drawDecks(aDeckArray);
    const currentDeckDiv = document.querySelector(`[data-title="${aCurrentDeck.deckName}"]`);
    styleCurrent(currentDeckDiv);  
    drawNewDeckForm(formValue);   
    drawCards(aCurrentDeck, cardViewValue, currentCard);
    drawNewCardForm(aDeckArray, formValue);
}

const loadGUI = (aDeckArray, aCurrentDeck, formValue, cardViewValue, currentCard) => {
    console.log(`initial load is ${isInitialLoad}`);
    if(isInitialLoad === 0){
        console.log('is initial load');
        drawGUIInitial(aDeckArray, aCurrentDeck, formValue, cardViewValue, currentCard);
        isInitialLoad = 1;
    }
    else{
        drawGUI(aDeckArray, aCurrentDeck, formValue, cardViewValue, currentCard);
    }
}

export default loadGUI;






