import { drawOverlay } from "./GUINewCard";


const drawDeckFormFields = () =>{
    const newForm = document.getElementById('newForm');
    const deckForm = document.createElement('form');
    deckForm.setAttribute('class', 'deckForm');
    deckForm.setAttribute('onSubmit', 'return false;');
    newForm.appendChild(deckForm);
    const newDeckTitle = document.createElement('input');
    newDeckTitle.setAttribute('class', 'deckTitleInput');
    newDeckTitle.classList.add('input');
    deckForm.appendChild(newDeckTitle);
    newDeckTitle.setAttribute('id', 'deck-title');
    newDeckTitle.setAttribute('type', 'text');
    newDeckTitle.setAttribute('name', 'deck-title');
    newDeckTitle.setAttribute('placeholder', 'Title');
    newDeckTitle.style.gridRow = '3/4';
}

const drawNewDeckForm = (value) => {
    console.log(`drawing new deck form value is ${value}`)
    if(value === 1){
        drawOverlay();
        drawDeckFormFields();
    }
}

export default drawNewDeckForm;