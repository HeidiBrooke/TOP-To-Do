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

let div = document.createElement('div');
div.setAttribute('id', 'title');
deckDock.appendChild(div);
div.textContent = 'Decks';

div = document.createElement('div');
div.setAttribute('id', 'title');
cardDock.appendChild(div);
div.textContent = 'Table';

const cardArea = document.createElement('div');
cardArea.setAttribute('id', 'cardArea');
cardDock.appendChild(cardArea);



const drawDecks = (arrayOfDecks) => {
    console.log('running drawDecks')
    console.log(deckArray[1]);
    arrayOfDecks.forEach(aDeck => {
        if((arrayOfDecks.indexOf(aDeck)) !== 0){
            const deckDiv = document.createElement('div');
            deckDiv.setAttribute('id', 'deck');
            deckDock.appendChild(deckDiv);

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

const drawCardStack = (aDeck) => {
    let fakeCard = document.createElement('div');
    fakeCard.setAttribute('id', 'cardBig');
    fakeCard.setAttribute('class', 'stack');
    cardArea.appendChild(fakeCard);

    fakeCard = document.createElement('div');
    fakeCard.setAttribute('id', 'cardBig');
    fakeCard.setAttribute('class', 'stack1');
    cardArea.appendChild(fakeCard);

    console.log('running drawCardStack');
    const cardDiv = document.createElement('div');
    cardDiv.setAttribute('id', 'cardBig');
    cardArea.appendChild(cardDiv);
    console.log(aDeck);
    const thisBookmark = aDeck.bookmark;
    console.log(aDeck.cardsArray[thisBookmark]);
    const thisCardName = aDeck.cardsArray[thisBookmark];
    const theCard = controller.getCard(thisCardName);

    

    const cardTitleDiv = document.createElement('div');
    cardTitleDiv.setAttribute('id', 'cardTitle');
    cardDiv.appendChild(cardTitleDiv);
    cardTitleDiv.textContent = theCard.cardName;

    
    
}

drawCardStack(defaultDeck);
drawDecks(deckArray);


