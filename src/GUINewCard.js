const drawCardForm = (content) => {
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
    cardDeck.setAttribute('name', 'cardDeck');
    
    const stepHolder = document.createElement('div');
    stepHolder.classList.add('stepHolder');
    stepHolder.setAttribute('id', 'stepHolder');
    cardForm.appendChild(stepHolder);
    
    const submitButtonsDiv = document.createElement('div');
    submitButtonsDiv.setAttribute('class', 'submitButtonsDiv');
    formDiv.appendChild(submitButtonsDiv);
    
    const cancel = document.createElement('div');
    cancel.setAttribute('class', 'check');
    cancel.setAttribute('id', 'cancel');
    cancel.classList.add('grow');
    submitButtonsDiv.appendChild(cancel);
    cancel.textContent = '✖';
    
    const check = document.createElement('div');
    check.setAttribute('class', 'check');
    submitButtonsDiv.appendChild(check);
    check.setAttribute('id', 'check');
    check.classList.add('grow');
    check.textContent = '✓';
    
    const drawStep = (aHolder) => {
        const step = document.createElement('input');
        step.setAttribute('class', 'step');
        step.classList.add('input');
        aHolder.appendChild(step);
        step.setAttribute('id', 'step');
        step.setAttribute('type', 'text');
        step.setAttribute('name', 'step');
        step.setAttribute('placeholder', '+ step');
        step.addEventListener('keyup', addNewStepField);
        return step;
    }
    
    drawStep(stepHolder);
    
    const date = document.createElement('input');
    date.setAttribute('class', 'date');
    date.classList.add('input');
    cardForm.appendChild(date);
    date.setAttribute('id', 'date');
    date.setAttribute('type', 'date');
    date.setAttribute('name', 'date');
    date.setAttribute('placeholder', ``);
    
}

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

const resetFormCard = () => {
    let aDiv = document.getElementById('card-title');
    aDiv.value = '';
    aDiv = document.getElementById('step');
    aDiv.value = '';
    aDiv.cardDate = document.getElementById('date').value;
    aDiv.value = '';
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
