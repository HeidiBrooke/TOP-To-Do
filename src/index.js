import * as controller from './controlls';
import {defaultDeck, defaultCard, deckArray, all} from './controlls';
import './style.css';
import card from "./card";
import deck from "./deck";



const content = document.createElement('div');
content.setAttribute('id', 'content');
document.body.appendChild(content);

const container = document.createElement('div');
container.setAttribute('id', 'container');
content.appendChild(container);

const header = document.createElement('div');
header.setAttribute('id', 'header');
container.appendChild(header);

const deckDock = document.createElement('div');
deckDock.setAttribute('id', 'deckDock');
container.appendChild(deckDock);

const cardDock = document.createElement('div');
cardDock.setAttribute('id', 'table');
container.appendChild(cardDock);

const logo = document.createElement('div');
logo.setAttribute('id', 'logo');
header.appendChild(logo);
logo.textContent = 'Shuffle';

const deckDockMenu = document.createElement('div');
deckDockMenu.setAttribute('class', 'menu');
deckDock.appendChild(deckDockMenu);

let div = document.createElement('div');
div.setAttribute('class', 'title');
deckDockMenu.appendChild(div);
div.textContent = 'Decks';

const addDeckButton = document.createElement('div');
addDeckButton.setAttribute('id', 'addDeckButton');
addDeckButton.setAttribute('class', 'title')
deckDockMenu.appendChild(addDeckButton);
addDeckButton.textContent = '+';

const deckArea = document.createElement('div');
deckArea.setAttribute('class', 'deckArea');
deckDock.appendChild(deckArea);

const cardDockMenu = document.createElement('div');
cardDockMenu.setAttribute('class', 'menu');
cardDock.appendChild(cardDockMenu);

div = document.createElement('div');
div.setAttribute('class', 'title');
cardDockMenu.appendChild(div);
div.textContent = 'Cards';

const addCardButton = document.createElement('div');
addCardButton.setAttribute('id', 'addCardButton');
addCardButton.setAttribute('class', 'title')
cardDockMenu.appendChild(addCardButton);
addCardButton.textContent = '+';

const cardArea = document.createElement('div');
cardArea.setAttribute('id', 'cardArea');
cardDock.appendChild(cardArea);

const forwardButton = document.createElement('div');
forwardButton.setAttribute('class', 'nextButton');
forwardButton.setAttribute('id', 'forwardButton');
cardArea.appendChild(forwardButton);
forwardButton.textContent = '>';

const backwardButton = document.createElement('div');
backwardButton.setAttribute('class', 'nextButton');
backwardButton.setAttribute('id', 'backwardButton');
cardArea.appendChild(backwardButton);
backwardButton.textContent = '<';

const overLayHolder = document.createElement('div');
overLayHolder.setAttribute('class', 'content');
overLayHolder.setAttribute('id', 'overLayHolder');
overLayHolder.classList.add('overLayHolder');
content.appendChild(overLayHolder);

const overlay = document.createElement('div');
overlay.setAttribute('class', 'overlay');
overLayHolder.appendChild(overlay);

const formDiv = document.createElement('div');
formDiv.setAttribute('class', 'formDiv');
overLayHolder.appendChild(formDiv);

const newCardForm = document.createElement('div');
newCardForm.setAttribute('class', 'cardBig');
newCardForm.classList.add('editSize');
newCardForm.setAttribute('id', 'newCardForm');
formDiv.appendChild(newCardForm);

const submitButtonsDiv = document.createElement('div');
submitButtonsDiv.setAttribute('class', 'submitButtonsDiv');
formDiv.appendChild(submitButtonsDiv);

const cancel = document.createElement('div');
cancel.setAttribute('class', 'check');
cancel.setAttribute('id', 'cancel');
submitButtonsDiv.appendChild(cancel);
cancel.textContent = '✖';

const check = document.createElement('div');
check.setAttribute('class', 'check');
submitButtonsDiv.appendChild(check);
check.setAttribute('id', 'check');
check.textContent = '✓';

const cardForm = document.createElement('form');
cardForm.setAttribute('class', 'cardForm');
newCardForm.appendChild(cardForm);

const cardTitleInput = document.createElement('input');
cardTitleInput.setAttribute('class', 'cardTitleInput');
cardTitleInput.classList.add('input');
cardForm.appendChild(cardTitleInput);
cardTitleInput.setAttribute('id', 'card-title');
cardTitleInput.setAttribute('type', 'text');
cardTitleInput.setAttribute('name', 'card-title');
cardTitleInput.setAttribute('placeholder', 'Title');

const cardDeck = document.createElement('select');
cardDeck.setAttribute('class', 'cardDeck');
cardDeck.setAttribute('multiple', 'multiple');
cardDeck.classList.add('input');
cardForm.appendChild(cardDeck);
cardDeck.setAttribute('id', 'cardDeck');
// cardDeck.setAttribute('type', '');
cardDeck.setAttribute('name', 'cardDeck');
// cardDeck.setAttribute('placeholder', 'Deck');

const step = document.createElement('input');
step.setAttribute('class', 'step');
step.classList.add('input');
cardForm.appendChild(step);
step.setAttribute('id', 'step');
step.setAttribute('type', 'text');
step.setAttribute('name', 'step');
step.setAttribute('placeholder', '+ step');

const date = document.createElement('input');
date.setAttribute('class', 'date');
date.classList.add('input');
cardForm.appendChild(date);
// const theDate = new Date();
// console.log('the date is' + theDate);
date.setAttribute('id', 'date');
date.setAttribute('type', 'date');
date.setAttribute('name', 'date');
date.setAttribute('placeholder', ``);

let currentDeck = defaultDeck;
let currentDeckDiv;


const updateCurrentDeckDiv = () => {
    console.log('im updateing the current DIV')
    const theCurrentDeckName = currentDeck.deckName;
    console.log('theCurrentDeckName is + ' + theCurrentDeckName);
    const deckDivs = document.getElementsByClassName(theCurrentDeckName);
    currentDeckDiv = deckDivs[0];
    // console.log(deckDivs);
    // Array.from(deckDivs).forEach(deckDiv => {
    //     console.log('the deckTitleis '+ deckTitleDiv);
    //     if(deckDiv.firstElementChild.textContent === theCurrentDeckName){
    //         currentDeckDiv = deckDiv;
    //     }
    // })
}


const styleCurrent = () => {
    currentDeckDiv.classList.add('selectedDeck');
    
}

const removeSelectedStyle = () => {
    currentDeckDiv.classList.remove('selectedDeck');
}

const updateCurrentDeck = (e) => {
    removeSelectedStyle();
    console.log('im UPDATInG!');
    console.log(e.target);
    const theDeckName = (e.target.textContent);
    currentDeck = controller.getDeck(theDeckName);
    console.log('gonna update current deck div');
    updateCurrentDeckDiv();
    console.log('gonna style current decDiv ' + currentDeckDiv);
    styleCurrent();
    populateCard();
}
const firstDrawDecks = (arrayOfDecks) => {
    console.log('running drawDecks')
    console.log(deckArray[1]);
    arrayOfDecks.forEach(aDeck => {
        if((arrayOfDecks.indexOf(aDeck)) !== 0){
            const deckDiv = document.createElement('div');
            deckDiv.setAttribute('class', 'deck');
            deckArea.appendChild(deckDiv);

            const deckTitleDiv = document.createElement('div');
            deckTitleDiv.setAttribute('id', 'deckTitle');
            deckDiv.appendChild(deckTitleDiv);
            deckTitleDiv.textContent = aDeck.deckName;

            deckDiv.classList.add(deckTitleDiv.textContent);

            deckDiv.addEventListener('click', updateCurrentDeck);
            deckTitleDiv.addEventListener('click', updateCurrentDeck);
        }
        });
    updateCurrentDeckDiv();
    console.log(currentDeckDiv);

}

const drawDecks = (arrayOfDecks) => {
    console.log('running drawDecks')
    console.log(deckArray[1]);
    arrayOfDecks.forEach(aDeck => {
        if((arrayOfDecks.indexOf(aDeck)) !== 0){
            const deckDiv = document.createElement('div');
            deckDiv.setAttribute('class', 'deck');
            deckArea.appendChild(deckDiv);

            const deckTitleDiv = document.createElement('div');
            deckTitleDiv.setAttribute('id', 'deckTitle');
            deckDiv.appendChild(deckTitleDiv);
            deckTitleDiv.textContent = aDeck.deckName;

            deckDiv.classList.add(deckTitleDiv.textContent);

            // const editDeck = document.createElement('div');
            // editDeck.setAttribute('id', 'editDeck')
            // deckDiv.appendChild(editDeck)
            // editDeck.textContent = 'Edit';

            deckDiv.addEventListener('click', updateCurrentDeck);
            deckTitleDiv.addEventListener('click', updateCurrentDeck);
            // editDeck.addEventListener('click', showForm);
        }
        });
    updateCurrentDeckDiv();
    styleCurrent();
    console.log(currentDeckDiv);

}

const drawAllCardsStack = (aDeck) => {
    const cardDiv = document.createElement('div');
    cardDiv.setAttribute('id', 'cardBig');
    cardDock.appendChild(cardDiv);
    console.log(aDeck.cardsArray[aDeck.bookmark]);
    const thisBookmark = aDeck.bookmark;
    const theCard = aDeck.cardsArray[thisBookmark].cardName;

    const cardTitleDiv = document.createElement('div');
    cardTitleDiv.setAttribute('id', 'cardTitle');
    cardDiv.appendChild(cardTitleDiv);
    cardTitleDiv.textContent = theCard.CardName;
}

const drawBackgroundCards = (num) => {
    for(let i = 0; i<num; i++ ){
    const fakeCard = document.createElement('div');
    fakeCard.setAttribute('class', 'cardBig');
    fakeCard.classList.add(`stack${i}`);
    cardArea.appendChild(fakeCard);
    }
}

const drawTitleDiv = () => {
    const cardTitleDiv = document.createElement('div');
    cardTitleDiv.setAttribute('id', 'cardTitle');
    cardTitleDiv.setAttribute('contenteditable', 'true');
    return cardTitleDiv;
}

const drawDateDiv = () => {
    const cardDateDiv = document.createElement('div');
    cardDateDiv.setAttribute('id', 'cardDate');
    return cardDateDiv;
}

const saveStep = (e) => {
    console.log('saving change to text');
    const text = e.target.textContent;
    console.log(text);
    const theCard = controller.getCard(currentDeck.cardsArray[currentDeck.bookmark]);
    theCard.cardSteps[0] = text;
}

const drawStepsDiv = () => {
    const cardStepsDiv = document.createElement('ul');
    cardStepsDiv.setAttribute('id', 'cardSteps');
    cardStepsDiv.setAttribute('contenteditable', 'true');
    cardStepsDiv.addEventListener('input', saveStep);
    return cardStepsDiv;
}

const drawTopCard = () => {
    const cardDiv = document.createElement('div');
    cardDiv.setAttribute('id', 'topCard');
    cardDiv.setAttribute('class', 'cardBig');
    cardArea.appendChild(cardDiv);
    const cardTitleDiv = drawTitleDiv();
    cardDiv.appendChild(cardTitleDiv);
    const cardDateDiv = drawDateDiv();
    cardDiv.appendChild(cardDateDiv);
    const cardStepsDiv = drawStepsDiv();
    cardDiv.appendChild(cardStepsDiv);
    return cardDiv;
}

const getBookmarkedCard = (aDeck) => {
    const thisBookmark = aDeck.bookmark;
    const thisCardName = aDeck.cardsArray[thisBookmark];
    console.log(thisCardName);
    const aCard = controller.getCard(thisCardName);
    console.log(aCard);
    return aCard;
}

const eraseSteps = () => {
    const stepsDiv = document.getElementById('cardSteps');
    const steps = stepsDiv.children;
    Array.from(steps).forEach(stepElement => {
        stepElement.remove();
    })
    
}

const populateCard = () => {
    eraseSteps();
    const theCard = getBookmarkedCard(currentDeck);
    console.log('puopulating with: ' + theCard);
    const cardTitleDiv = document.getElementById('cardTitle');
    if(theCard !== undefined){
        cardTitleDiv.textContent = theCard.cardName;
    }
    else {
        cardTitleDiv.textContent = '';
    }
    const cardDateDiv = document.getElementById('cardDate');
    if(theCard !== undefined){
        cardDateDiv.textContent = `Due date: ${theCard.cardDate}`;
    }
    else {
        cardDateDiv.textContent = '';
    }

    const cardStepsDiv = document.getElementById('cardSteps');
    console.log(cardStepsDiv);
    console.log(typeof cardStepsDiv);
    if(theCard !== undefined){
        theCard.cardSteps.forEach(stepString => {
            const listItem = document.createElement('li');
            listItem.textContent = `${stepString}`
            console.log(cardStepsDiv);
            console.log(typeof cardStepsDiv);
            cardStepsDiv.appendChild(listItem);
        })
        // cardStepsDiv.textContent = `${theCard.cardSteps}`;
    }
    else {
        cardStepsDiv.textContent = '';
    }
    
}

const drawCardStack = (aDeck) => {
    console.log(aDeck);
    drawBackgroundCards(2);
    drawTopCard();
    populateCard();    
}

const advanceBookmark = () => {
    console.log('running advance bookmark')
    currentDeck.bookmark++;
    if(currentDeck.cardsArray[currentDeck.bookmark] !== undefined){
        populateCard();
    }
    else{
        currentDeck.bookmark--;
        populateCard();
    }
}

const previousBookmark = () => {
    console.log('running previous bookmark')
    currentDeck.bookmark--;
    if(currentDeck.cardsArray[currentDeck.bookmark] !== undefined){
        populateCard();
    }
    else{
        currentDeck.bookmark++;
        populateCard();
    }
    
}

const addEventListeners = (elementName, aFunction) =>{
    const element = document.getElementById(`${elementName}`);
    console.log(element);
    console.log(aFunction);
    element.addEventListener('click', aFunction);
}

const addForwardBackwardListeners = () => {
    addEventListeners('forwardButton', advanceBookmark);
    addEventListeners('backwardButton', previousBookmark);
}

const eraseTopCard = () => {
    const oldCard = document.getElementById('topCard');
    oldCard.remove();
    drawTopCard();
}

const eraseDecks = () => {
    const oldDecks = document.getElementsByClassName('deck');
    Array.from(oldDecks).forEach(deckElement => {
        deckElement.remove();
    })
}
const createAndRenderDeck = (name) => {
    controller.createDeck(name);
    eraseDecks();
    drawDecks(deckArray);
}


const createAndRenderCard = (name) => {
    controller.createCard(name);
    populateCard();
}

let formType = 'deck';

const resetDeckOptions = () => {
    const deckSelector = document.getElementById('cardDeck');
    Array.from(deckSelector).forEach(deckElement => {
        deckElement.remove();
    })
}
const setDeckOptions = () => {
    resetDeckOptions();
    deckArray.forEach(deckElement => {
        const deckOption = document.createElement('option');
        cardDeck.appendChild(deckOption);
        deckOption.value = deckElement.deckName;
        deckOption.textContent = deckElement.deckName;
    })
}

const resetFormDeck = () => {
    const aDiv = document.getElementById('card-title');
    aDiv.value = '';
}

const resetFormCard = () => {
    let aDiv = document.getElementById('card-title');
    aDiv.value = '';
    aDiv = document.getElementById('step');
    aDiv.value = '';
    aDiv.cardDate = document.getElementById('date').value;
    aDiv.value = '';
}

const showForm = () => {
    console.log('showing form!');
    const form = document.getElementById('overLayHolder');
    form.style.visibility = 'visible';
}

const hideForm = () => {
    console.log('hiding form!');
    const form = document.getElementById('overLayHolder');
    form.style.visibility = 'hidden';
    let aDiv = document.getElementById('step');
    aDiv.style.visibility = 'hidden';
    aDiv = document.getElementById('date');
    aDiv.style.visibility = 'hidden';
    aDiv = document.getElementById('cardDeck');
    aDiv.style.visibility = 'hidden';
}

const showDeckForm = () => {
    showForm();
    formType = 'deck';
    let aDiv = document.getElementById('step');
    aDiv.style.visibility = 'hidden';
    aDiv = document.getElementById('date');
    aDiv.style.visibility = 'hidden';
    aDiv = document.getElementById('cardDeck');
    aDiv.style.visibility = 'hidden';
    aDiv = document.getElementById('card-title');
    aDiv.style.gridRow = '3/4';
    
}

const showCardForm = () => {
    setDeckOptions();
    showForm();
    formType = 'card';
    let aDiv = document.getElementById('step');
    aDiv.style.visibility = 'visible';
    aDiv = document.getElementById('date');
    aDiv.style.visibility = 'visible';
    aDiv = document.getElementById('cardDeck');
    aDiv.style.visibility = 'visible';
    aDiv = document.getElementById('card-title');
    aDiv.style.gridRow = '1/2';
}

const saveDeck = () => {
    const aDiv = document.getElementById('card-title').value;
    createAndRenderDeck(aDiv);
    resetFormDeck();
    hideForm();
}

const saveCard = () => {
    let aDiv = document.getElementById('card-title').value;
    createAndRenderCard(aDiv);
    aDiv = controller.getCard(aDiv);
    aDiv.cardSteps.push(document.getElementById('step').value);
    aDiv.cardDate = document.getElementById('date').value;
    const deckList = document.getElementById('cardDeck');
    const collection = deckList.selectedOptions;
    Array.from(collection).forEach(option => {
            aDiv.cardDecks.push(option.value);  
    })
    aDiv.cardDecks.forEach(deckNameString => {
        const aDeck = controller.getDeck(deckNameString)
        controller.addCardtoDeck(aDiv, aDeck);
    })
    resetFormCard();
    hideForm();
}



const saveForm = () => {
    console.log('save type is: '+ formType);
    if(formType ==='deck'){
        console.log('saving deck!')
        saveDeck();
    }
    else if(formType === 'card'){
        console.log('saving card!')
        saveCard();
    }
}


addEventListeners('addDeckButton', showDeckForm);
addEventListeners('addCardButton', showCardForm);
addEventListeners('cancel', hideForm);
addEventListeners('check', saveForm);


drawCardStack(defaultDeck);
firstDrawDecks(deckArray);
addForwardBackwardListeners();
styleCurrent();



