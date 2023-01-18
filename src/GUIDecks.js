import deck from "./deck";
import layout from "./GUILayout";
import './style.css';

export const styleCurrent = (currentDeckDiv) => {
    currentDeckDiv.classList.add('selectedDeck');  
}

const removeSelectedStyle = (previousDeckDiv) => {
    previousDeckDiv.classList.remove('selectedDeck');
}

const styleDecks = (currentDeckDiv, previousDeckDiv) => {
    removeSelectedStyle(previousDeckDiv);
    styleCurrent(currentDeckDiv);
}

const drawBlankDeck = () => {
    const blankDeckDiv = document.createElement('div');
    blankDeckDiv.setAttribute('class', 'blankDeck');
    deckArea.appendChild(blankDeckDiv);

    const littlePlus = document.createElement('div');
    littlePlus.setAttribute('class', 'littlePlus');
    littlePlus.classList.add('grow');
    littlePlus.textContent = '+';
    littlePlus.addEventListener('click', showDeckForm)
    blankDeckDiv.appendChild(littlePlus);
}

const eraseBlankDeck = () => {
    const blankDeckDiv = document.getElementsByClassName('blankDeck');
    blankDeckDiv[0].remove();
}

const firstDrawDecks = (arrayOfDecks) => {
    // console.log('running drawDecks')
    // console.log(deckArray[1]);
    arrayOfDecks.forEach(aDeck => {
        const deckDiv = document.createElement('div');
            deckDiv.setAttribute('class', 'deck');
            // deckDiv.classList.add('grow');
            deckArea.appendChild(deckDiv);

            const deckTitleDiv = document.createElement('div');
            deckTitleDiv.setAttribute('id', 'deckTitle');
            deckTitleDiv.classList.add('grow');
            deckDiv.appendChild(deckTitleDiv);
            deckTitleDiv.textContent = aDeck.deckName;

            deckDiv.setAttribute('data-title', `${aDeck.deckName}`);

            deckDiv.addEventListener('click', updateCurrentDeck);
            deckTitleDiv.addEventListener('click', updateCurrentDeck);
            deckTitleDiv.addEventListener('input', saveDeckTitle);

            if((arrayOfDecks.indexOf(aDeck)) !== 0){
                const deckDeleteButton = drawDeckDeleteButton();
                deckDiv.appendChild(deckDeleteButton);
                deckDeleteButton.classList.add('grow');
                deckTitleDiv.setAttribute('contenteditable', 'true');
            }
        });
    drawBlankDeck();
    updateCurrentDeckDiv();
    // console.log(currentDeckDiv);

}


const drawDeckDeleteButton = () => {
    const deckDeleteButton = document.createElement('div');
    deckDeleteButton.setAttribute('id', 'deckDelete');
    deckDeleteButton.setAttribute('class', 'deckDelete');
    deckDeleteButton.textContent = '-'
    return deckDeleteButton;
}

export const drawDecks = (arrayOfDecks) => {
    console.log('running drawDecks')
    const deckArea = document.getElementById('deckArea');
    // console.log(deckArray[1]);
    arrayOfDecks.forEach(aDeck => {
            const deckDiv = document.createElement('div');
            deckDiv.setAttribute('class', 'deck');
            deckArea.appendChild(deckDiv);

            const deckTitleDiv = document.createElement('div');
            deckTitleDiv.setAttribute('id', 'deckTitle');
            deckTitleDiv.setAttribute('class', 'deckTitle');
            deckDiv.appendChild(deckTitleDiv);
            deckTitleDiv.textContent = aDeck.deckName;

            deckDiv.setAttribute('data-title', `${aDeck.deckName}`);

            // const editDeck = document.createElement('div');
            // editDeck.setAttribute('id', 'editDeck')
            // deckDiv.appendChild(editDeck)
            // editDeck.textContent = 'Edit';

            //deckDiv.addEventListener('click', updateCurrentDeck);
            // deckTitleDiv.addEventListener('click', updateCurrentDeck);
            
            // editDeck.addEventListener('click', showForm);
        if((arrayOfDecks.indexOf(aDeck)) !== 0){
            const deckDeleteButton = drawDeckDeleteButton();
            deckDiv.appendChild(deckDeleteButton);
            deckTitleDiv.setAttribute('contenteditable', 'true');
        }
        }
        );
    // eraseBlankDeck();
    // drawBlankDeck();
    // updateCurrentDeckDiv();
    // styleCurrent();
    // console.log(currentDeckDiv);

}