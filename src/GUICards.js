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
    cardTitleDiv.setAttribute('class', 'cardTitle');
    cardTitleDiv.setAttribute('contenteditable', 'true');
    cardTitleDiv.addEventListener('input', saveTitle);
    return cardTitleDiv;
}

const drawDateDiv = () => {
    const cardDateDiv = document.createElement('div');
    cardDateDiv.setAttribute('id', 'cardDate');
    return cardDateDiv;
}

const drawStepsDiv = () => {
    console.log(`drawing step div`)
    const cardStepsDiv = document.createElement('ul');
    cardStepsDiv.setAttribute('id', 'cardSteps');
    return cardStepsDiv;
}

const drawCardStep = () => {
    console.log('drawing the step!')
    const stepDiv = document.createElement('li');
    stepDiv.setAttribute('contenteditable', 'true');
    stepDiv.setAttribute('class', 'stepDiv');
    stepDiv.addEventListener('keydown', saveStep);
    const cardStepsDiv = document.getElementById('cardSteps');
    cardStepsDiv.appendChild(stepDiv);
    return stepDiv;
}

const drawDeleteButton = () => {
    const cardDeleteButton = document.createElement('div');
    cardDeleteButton.setAttribute('id', 'cardDelete');
    cardDeleteButton.addEventListener('click', deleteAndEraseCard);
    cardDeleteButton.classList.add('grow');
    cardDeleteButton.textContent = '-'
    return cardDeleteButton;
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
    const cardDeleteButton = drawDeleteButton();
    cardDiv.appendChild(cardDeleteButton);
    return cardDiv;
}

const populateCard = () => {
    eraseSteps();
    console.log(currentDeck);
    console.log(currentDeck.bookmark);
    console.log(currentDeck.cardsArray[1]);
    const theCard = getBookmarkedCard(currentDeck);
    console.log('puopulating with: ' + theCard);
    const cardTitleDiv = document.getElementById('cardTitle');
    cardTitleDiv.classList.remove('bigPlus');
    cardTitleDiv.classList.remove('grow');
    cardTitleDiv.classList.add('cardTitle');
    if(theCard !== undefined){
        cardTitleDiv.textContent = theCard.cardName;
    }
    else {
        console.log('making plus card')
        cardTitleDiv.textContent = '+';
        cardTitleDiv.setAttribute('class', 'bigPlus');
        cardTitleDiv.setAttribute('contenteditable', false);
        cardTitleDiv.classList.add('grow');
        cardTitleDiv.addEventListener('click', showCardForm);
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
        if(theCard.cardSteps.length > 1){
            console.log('there are step(s)! DRAW STEP DIV(s)');
            theCard.cardSteps.forEach(stepString => {
                const aStep = drawCardStep();
                aStep.textContent = stepString;
            })
        }
        else{
            console.log('the are no steps! DRAW empty STEP DIV');
            drawCardStep();
        }
    }
    else {
        cardStepsDiv.textContent = '';
    }
    
}

const eraseTopCard = () => {
    const oldCard = document.getElementById('topCard');
    oldCard.remove();
    drawTopCard();
}