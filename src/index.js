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

export const currentDeck = defaultDeck;

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
        }
        
        });

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

const drawTopCard = () => {
    const cardDiv = document.createElement('div');
    cardDiv.setAttribute('id', 'topCard');
    cardDiv.setAttribute('class', 'cardBig');
    cardArea.appendChild(cardDiv);
    const cardTitleDiv = drawTitleDiv();
    cardDiv.appendChild(cardTitleDiv);
    return cardDiv;
}

const drawTitleDiv = () => {
    const cardTitleDiv = document.createElement('div');
    cardTitleDiv.setAttribute('id', 'cardTitle');
    return cardTitleDiv;
}

const getBookmarkedCard = (aDeck) => {
    const thisBookmark = aDeck.bookmark;
    const thisCardName = aDeck.cardsArray[thisBookmark];
    console.log(thisCardName);
    const aCard = controller.getCard(thisCardName);
    console.log(aCard);
    return aCard;
}

const populateCard = (aCard) => {
    const theCard = aCard;
    const cardTitleDiv = document.getElementById('cardTitle');
    cardTitleDiv.textContent = theCard.cardName;
}

export const drawCardStack = (aDeck) => {
    console.log(aDeck);
    drawBackgroundCards(2);
    const cardDiv = drawTopCard();
    const theCard = getBookmarkedCard(aDeck);
    console.log(theCard);
    populateCard(theCard);    
}

const advanceBookmark = () => {
    currentDeck.bookmark++;
    console.log(currentDeck);
    console.log(currentDeck.bookmark);
    const currentCard = controller.getCard(currentDeck.cardsArray[currentDeck.bookmark]);
    populateCard(currentCard);
}

const previousBookmark = () => {
    currentDeck.bookmark--;
    const currentCard = controller.getCard(currentDeck.cardsArray[currentDeck.bookmark]);
    populateCard(currentCard);
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
const createAndRenderDeck = () => {
    controller.createDeck();
    eraseDecks();
    drawDecks(deckArray);
}


const createAndRenderCard = () => {
    eraseTopCard();
    const theCard = getBookmarkedCard(theDeck);
    console.log(theCard);
    populateCard(theCard);
}

addEventListeners('addDeckButton', createAndRenderDeck);
addEventListeners('addCardButton', controller.createCard);


drawCardStack(defaultDeck);
drawDecks(deckArray);
addForwardBackwardListeners();


