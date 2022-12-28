import controlls from './controlls';
import './style.css';

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

const table = document.createElement('div');
table.setAttribute('id', 'table');
container.appendChild(table);

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
table.appendChild(div);
div.textContent = 'Table';




controlls();
