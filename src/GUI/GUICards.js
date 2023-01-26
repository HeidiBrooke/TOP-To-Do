const drawForwardAndBackButtons = () => {
    const cardArea = document.getElementById('cardArea');
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
}

const drawBackgroundCards = (num) => {
    const cardArea = document.getElementById('cardArea');
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
    
    return cardTitleDiv;
}
const drawStepsDiv = () => {
    console.log(`drawing step div`)
    const cardStepsDiv = document.createElement('ul');
    cardStepsDiv.setAttribute('id', 'cardSteps');
    return cardStepsDiv;
}

export const drawCardStep = () => {
    console.log('drawing the step!')
    const stepDiv = document.createElement('li');
    stepDiv.setAttribute('contenteditable', 'true');
    stepDiv.setAttribute('class', 'stepDiv');
    const cardStepsDiv = document.getElementById('cardSteps');
    cardStepsDiv.appendChild(stepDiv);
    return stepDiv;
}
const drawDateDiv = () => {
    const cardDateDiv = document.createElement('div');
    cardDateDiv.setAttribute('id', 'cardDate');
    cardDateDiv.setAttribute('contenteditable', 'true');
    return cardDateDiv;
}
const drawDeleteButton = () => {
    const cardDeleteButton = document.createElement('div');
    cardDeleteButton.setAttribute('id', 'cardDelete');
    
    cardDeleteButton.classList.add('grow');
    cardDeleteButton.textContent = '-'
    return cardDeleteButton;
}

const populateSteps = (currentCard) => {
    const theCard = currentCard;
    if(theCard.cardSteps.length >= 1){
        console.log('there are step(s)! DRAW STEP DIV(s)');
        theCard.cardSteps.forEach(stepString => {
            const index = theCard.cardSteps.indexOf(stepString);
            const aStep = drawCardStep();
            aStep.setAttribute('data-index', `${index}`);
            aStep.textContent = stepString;
        })
    }
    else{
        console.log('the are no steps! DRAW empty STEP DIV');
        drawCardStep();
    }
}

const drawTopCard = (currentCard) => {
    const cardArea = document.getElementById('cardArea');
    const cardDiv = document.createElement('div');
    cardDiv.setAttribute('id', 'topCard');
    cardDiv.setAttribute('class', 'cardBig');
    cardArea.appendChild(cardDiv);
    const cardTitleDiv = drawTitleDiv();
    cardDiv.appendChild(cardTitleDiv);
    cardTitleDiv.textContent = currentCard.cardName;
    const cardStepsDiv = drawStepsDiv();
    cardDiv.appendChild(cardStepsDiv);
    populateSteps(currentCard);
    const cardDateDiv = drawDateDiv();
    cardDiv.appendChild(cardDateDiv);
    cardDateDiv.textContent = `Due: ${currentCard.cardDate}`;
    const cardDeleteButton = drawDeleteButton();
    cardDiv.appendChild(cardDeleteButton);
    return cardDiv;
}

const drawBlankTopCard = () => {
    const cardArea = document.getElementById('cardArea');
    const cardDiv = document.createElement('div');
    cardDiv.setAttribute('id', 'topCard');
    cardDiv.setAttribute('class', 'cardBig');
    cardArea.appendChild(cardDiv);
    const cardPlus = drawTitleDiv();
    cardPlus.setAttribute('id', 'cardPlus')
    console.log('making plus card')
    cardPlus.textContent = '+';
    cardPlus.setAttribute('class', 'bigPlus');
    cardPlus.setAttribute('contenteditable', false);
    cardPlus.classList.add('grow');
    cardDiv.appendChild(cardPlus);
}

const drawBlankStack = () => {
    drawForwardAndBackButtons();
    drawBackgroundCards(2);
    drawBlankTopCard();
}

const drawCardStack = (currentCard) => {
    console.log(`drawing card stack`);
    drawForwardAndBackButtons();
    drawBackgroundCards(2);
    drawTopCard(currentCard);   
}

const drawCards = (cardViewValue, currentCard) => {
    if(cardViewValue === 0) {
        if(currentCard !== undefined){
            drawCardStack(currentCard);
        }
        else(drawBlankStack());
        
    }

}

export default drawCards;


const drawAllCardsStack = (aDeck) => {
    const cardDock = document.getElementById('cardDock');
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

const populateCard = (currentDeck) => {
    eraseSteps();
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

