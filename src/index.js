import controlls from './controlls';
import './style.css';
import card from "./card";
import deck from "./deck";

const all = deck("all");
  console.log(all);
  const deckArray = [];
  deckArray.push(all);
  const table = deckArray;

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

controlls();

const drawDecks = (arrayOfDecks) => {
    arrayOfDecks.forEach(deck => {
        div = document.createElement('div');
        div.setAttribute('id', 'deck');
        deckDock.appendChild(div);
        div.textContent = deck.deckName;
        });

}

drawDecks(deckArray);

