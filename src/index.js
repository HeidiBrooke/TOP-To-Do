import * as controller from './controlls';
import {defaultDeck, deckArray, all} from './controlls';
import './style.css';
import gui from './GUI';
import card from './card';
import {drawStep} from './GUINewCard';

let currentDeck = defaultDeck;
let currentCard;
let currentDeckDiv;
let formValue = 0;
let cardViewValue = 0;

const getBookmarkedCard = (aDeck) => {
    console.log(`the current deck is ${aDeck}`);
    const thisBookmark = aDeck.bookmark;
    console.log(`the bookmakr is ${aDeck.bookmark}`);
    let thisCardName = aDeck.cardsArray[thisBookmark];
    console.log(`this card name is ${thisCardName}`);
    const type = typeof(thisCardName);
    if(type !== "string"){
        if(thisCardName !== undefined){
            thisCardName = thisCardName.cardName;
        }
    }
    //console.log(`bookmrked crd is ${thisCardName}`);
    const aCard = controller.getCard(thisCardName);
    return aCard;
}


const updateCurrentCard = () => {
    currentCard = getBookmarkedCard(currentDeck);
    //console.log(`current card has been updated to ${currentCard.cardName}`);
}

updateCurrentCard();
gui(deckArray, currentDeck, cardViewValue, currentCard);



const advanceBookmark = () => {
    console.log('running advance bookmark')
    currentDeck.bookmark++;
    if(currentDeck.cardsArray[currentDeck.bookmark] !== undefined){
        refresh();
    }
    else{
        currentDeck.bookmark--;
        refresh();
    }
}

const previousBookmark = () => {
    console.log('running previous bookmark')
    currentDeck.bookmark--;
    console.log(currentDeck.bookmark);
    if(currentDeck.cardsArray[currentDeck.bookmark] !== undefined){
        console.log('bookmark was defined')
        refresh();
    }
    else{
        currentDeck.bookmark++;
        console.log(currentDeck.bookmark);
        refresh();
    }
    
}

const selectDeck = (e) => {
    const nameOfDeck = e.target.getAttribute('data-title');
    currentDeck = controller.getDeck(nameOfDeck);
    refresh();

}

const addDeck = () => {
    formValue = 1;
    refresh();
}

const saveDeck = (e) => {
        const titleText = document.getElementById('deck-title').value;
        controller.createDeck(titleText);
        clearForm();
        refresh();  
}

const saveDeckOnEnter = (e) => {
    if(e.keyCode === 13){
        const titleText = document.getElementById('deck-title').value;
        controller.createDeck(titleText);
        clearForm();
        refresh();
    }

}

const clearForm = () => {
    formValue = 0;
    const form = document.getElementById('overLayHolder');
    form.remove();
}

const deleteAndEraseDeck = (e) => {
    console.log(`erasing and deleting deck.${currentDeck.deckName}`)
    e.stopPropagation();
    const deleteDiv = e.target;
    const deckDiv = deleteDiv.parentElement;
    const deckTitleDiv = deckDiv.firstChild;
    const deckTitle = deckTitleDiv.textContent;
    const currentDeckIndex = deckArray.indexOf(currentDeck);
    console.log(`the index of the currenDeck is ${currentDeckIndex}`)
    controller.deleteDeck(deckTitle);
    if(currentDeck.deckName === deckTitle){
        console.log(`the deck deleted was the current deck.`)
        if(deckArray.length < 2){
            currentDeck = all;
        }
        else {
            currentDeck = deckArray[currentDeckIndex - 1];
            refresh();
        }
        refresh();
    }
    else{
        refresh();
    }
    refresh();
    console.log(`AFTER DELETE currentDeck is ${currentDeck.deckName}`);
}



const setDeckDeleteListeners = () => {
    const divCollection = document.getElementsByClassName('deckDelete');
    Array.from(divCollection).forEach(div => {
        div.addEventListener('click', deleteAndEraseDeck)
    })
}

const selectDeckListeners = () => {
    const deckCollection = document.getElementsByClassName('deck');
    Array.from(deckCollection).forEach(deckDiv => {
       deckDiv.addEventListener('click', selectDeck);
    })
}

const setPlusListeners = () => {
    const addDeckDiv = document.getElementById('addDeckButton');
    addDeckDiv.addEventListener('click', addDeck);
}

const setFormButtonListeners = () => {
    const confirm = document.getElementById('check');
    const cancel = document.getElementById('cancel');
    if(formValue === 1){
        const titleInput = document.getElementById('deck-title');
    if(titleInput !== null){
        titleInput.addEventListener('keyup', saveDeckOnEnter);
    }
    if(confirm !== null){
        confirm.addEventListener('click', saveDeck);
    }
    }
    if(formValue === 2){
        const titleInput = document.getElementById('card-title');
    if(titleInput !== null){
        //titleInput.addEventListener('keyup', saveCardOnEnter);
    }
    if(confirm !== null){
        confirm.addEventListener('click', saveCard);
    }
    }
    
    if(cancel !== null){
        cancel.addEventListener('click', clearForm);
    }
    
}

const saveTitle = (e) => {
    // console.log('saving change to title');
    const text = e.target.textContent;
    // console.log(text);
    // console.log(currentDeck.bookmark);
    // console.log(currentDeck.cardsArray[currentDeck.bookmark]);
    // currentDeck.cardsArray[currentDeck.bookmark] = text;
    const theCard = controller.getCard(currentDeck.cardsArray[currentDeck.bookmark]);
    // console.log(theCard);
    theCard.cardName = text;
    currentDeck.cardsArray[currentDeck.bookmark] = text;
    // console.log(theCard.cardName);
}

const saveStep = (e) => {
    if(e.keyCode === 13){
        e.preventDefault();
        const initialText = e.target.textContent;
        const stepString = e.target.textContent;
        console.log(`stepString is ${stepString}`);
        const theCard = controller.getCard(currentDeck.cardsArray[currentDeck.bookmark]);
        const index = theCard.cardSteps.indexOf(stepString);
        console.log(`the card steps are: ${theCard.cardSteps}`);
        const text = e.target.textContent;
        console.log(`text is ${text}`);
        console.log(`index is ${index}`);
        if(text !== ''){
            if(theCard.cardSteps.length < 1){
                
                    console.log(`card steps less than 1`)
                    theCard.cardSteps.push(text);
                
            }
            else {
                    if(theCard.cardSteps[index] === initialText){
                        theCard.cardSteps[index] = text;
                    }
                    else {
                        theCard.cardSteps.push(text);
                    }
                        
                
                    
                }
            const newStepDiv = drawCardStep();
            newStepDiv.focus();
            }
            e.target.blur();
            const cardStepsDiv = document.getElementById('cardSteps');
            const thisStep = cardStepsDiv.lastChild;
            // if(e.target.hasFocus() == false){
            //     thisStep.remove();
            // }
            
        }
        
        

    }


const deleteAndEraseCard = () => {
    const thisCardName = document.getElementById('cardTitle').textContent;
    console.log(`the card name gotten is ${thisCardName}`);
    const thisCard = controller.getCard(thisCardName);
    console.log(`the card returned was ${thisCard.cardName}`);
    if(currentDeck === all){
        thisCard.cardDecks.forEach(deckElement => {
            const thisDeck = controller.getDeck(deckElement);
            controller.deleteCardFromDeck(thisCard, thisDeck);
        })
        controller.deleteCard(thisCard);
    }
    else{
        controller.deleteCardFromDeck(thisCard, currentDeck);
    }
    console.log(`current deck is still ${currentDeck.deckName}`);
    console.log(`current deck length is ${currentDeck.cardsArray.length}`);
    if(currentDeck.cardsArray.length < 2){
        currentDeck.bookmark = 0;
        console.log(`current deck bookmark is now${currentDeck.bookmark}`);
    }
    refresh(); 
    // controller.deleteCard();
    //populateCard();
}

const addCard = () => {
    formValue = 2;
    refresh();     
}

const setCardlisteners = () => {
    const cardDeleteButton = document.getElementById('cardDelete')
    if(cardDeleteButton !== null){
        cardDeleteButton.addEventListener('click', deleteAndEraseCard);
    }
    
    const stepDivs = document.getElementsByClassName('stepDiv');
    if(stepDivs !== null){
    Array.from(stepDivs).forEach(stepDiv => {
       stepDiv.addEventListener('keydown', saveStep);
    })
    }
    const cardTitleDiv = document.getElementById('cardTitle');
    if(cardTitleDiv !== null){
        cardTitleDiv.addEventListener('input', saveTitle);
    }
    const cardPlusDiv = document.getElementById('cardPlus');
    if(cardPlusDiv !== null){
        cardPlusDiv.addEventListener('click', addCard);
    }
}



const addEventListeners = (elementName, aFunction) =>{
    const element = document.getElementById(`${elementName}`);
    element.addEventListener('click', aFunction);
}

const addForwardBackwardListeners = () => {
    addEventListeners('forwardButton', advanceBookmark);
    addEventListeners('backwardButton', previousBookmark);
}

const setListeners = () => {
    selectDeckListeners();
    setPlusListeners();
    setFormButtonListeners();
    setDeckDeleteListeners();
    setCardlisteners();
    addForwardBackwardListeners();
}

const eraseGUI = () => {
    const decks = document.getElementsByClassName('deck');
    Array.from(decks).forEach(deckElement => 
        deckElement.remove());
    const cardArea = document.getElementById('cardArea');
    const cards = cardArea.childNodes;
    Array.from(cards).forEach(cardElement => {
        cardElement.remove();
    })
}
const refresh = () => {
    updateCurrentCard();
    eraseGUI();
    gui(deckArray, currentDeck, formValue, cardViewValue, currentCard);
    setListeners()
}

refresh();



const eraseTopCard = () => {
    const oldCard = document.getElementById('topCard');
    oldCard.remove();
    drawTopCard();
}


const updateCurrentDeckDiv = () => {
    // console.log('im updateing the current DIV')
    const theCurrentDeckName = currentDeck.deckName;
    // console.log('theCurrentDeckName is + ' + theCurrentDeckName);
    const deckDivs = document.getElementsByClassName('deck');
    Array.from(deckDivs).forEach(deckDiv => {
        const titleDiv = deckDiv.children[0];
        console.log(deckDiv);
        console.log(theCurrentDeckName);
        console.log(`does ${titleDiv} and ${theCurrentDeckName} match?`)
        if(titleDiv.textContent === theCurrentDeckName){
            currentDeckDiv = deckDiv;
        }
    })
    
    // console.log(deckDivs);
    // Array.from(deckDivs).forEach(deckDiv => {
    //     console.log('the deckTitleis '+ deckTitleDiv);
    //     if(deckDiv.firstElementChild.textContent === theCurrentDeckName){
    //         currentDeckDiv = deckDiv;
    //     }
    // })
}






const updateCurrentDeck = (e) => {
    removeSelectedStyle();
    // console.log('im UPDATInG!');
    console.log(e.target.innerHTML);
    if(e.target.classList.contains('deck')){
        console.log('clickedon DECK DIV')
        console.log(e.target.getAttribute('data-title'))
        const theDeckName = (e.target.getAttribute('data-title'));
        currentDeck = controller.getDeck(theDeckName);
    }
    else {
        console.log('clickedon TITLE DIV')
        console.log(e.target.textContent)
        const theDeckName = (e.target.textContent);
        currentDeck = controller.getDeck(theDeckName);
    }
    
    // console.log('gonna update current deck div');
    updateCurrentDeckDiv();
    // console.log('gonna style current decDiv ' + currentDeckDiv);
    styleCurrent();
    populateCard();
}

const updateCurrentDeckByName = (name) => {
    removeSelectedStyle();
    // console.log('im UPDATInG!');
    
    const theDeckName = name;
    currentDeck = controller.getDeck(theDeckName);
    // console.log('gonna update current deck div');
    updateCurrentDeckDiv();
    // console.log('gonna style current decDiv ' + currentDeckDiv);
    styleCurrent();
    populateCard();
}






const saveDeckTitle = (e) => {
    // console.log('saving change to title');
    const text = e.target.textContent;
    currentDeck.deckName = text;
}










    














const eraseSteps = () => {
    const stepsDiv = document.getElementById('cardSteps');
    const steps = stepsDiv.children;
    Array.from(steps).forEach(stepElement => {
        console.log(`removing ${stepElement} from ${stepsDiv}`)
        stepElement.remove();
    })
    
}
















// const createCard = (name) => {
//     controller.createCard(name);
//     populateCard();
// }



let formType = 'deck';







const showForm = () => {
    // console.log('showing form!');
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







const saveCard = () => {
    let isCurrent = 0;
    let aCard = document.getElementById('card-title').value;
    aCard = controller.createCard(aCard);
    const stepCollection = document.getElementsByClassName('step');
    Array.from(stepCollection).forEach(step => {
        aCard.cardSteps.push(step.value);
    })

    aCard.cardDate = document.getElementById('date').value;
    const deckList = document.getElementById('cardDeck');
    const collection = deckList.selectedOptions;
    console.log(`the current deck was ${currentDeck}`);
    if(collection.length < 2 ){
        const theSelectedDeck = collection[0].textContent;
        const theDeckName = theSelectedDeck;
        currentDeck = controller.getDeck(theDeckName);
    }
    console.log(`the current deck is now ${currentDeck}`);
    console.log(`selected options collection is ${collection}`);
    Array.from(collection).forEach(option => {
        console.log(`this option is ${option} it's value is ${option.value}`);
            aCard.cardDecks.push(option.value); 
            if(option.value === currentDeck.deckName){
                isCurrent = 1;
                console.log(`${option.value} is ${currentDeck.deckName}`);
            } 
    })
    aCard.cardDecks.forEach(deckNameString => {
        if(deckNameString !== 'all'){
            const aDeck = controller.getDeck(deckNameString)
            controller.addCardtoDeck(aCard, aDeck);
        }
    })
    if(isCurrent === 1){
        console.log(`${currentDeck.bookmark} is the current bookmark of the current deck.`)
        console.log(`but now it will be ${currentDeck.cardsArray.indexOf(aCard.cardName)}`);
        // const theCardBookmark = currentDeck.cardsArray.indexOf(aCard.cardName);
        currentDeck.bookmark = currentDeck.cardsArray.indexOf(aCard.cardName);
        console.log(`the current deck bookmark is now ${currentDeck.bookmark}`);
        isCurrent = 0;
    }
    console.log(`saving card. current deck is ${currentDeck}`);
    console.log(currentDeck.bookmark);
    clearForm();
    refresh();
    
}



const saveForm = () => {
    // console.log('save type is: '+ formType);
    if(formType ==='deck'){
        console.log('saving deck!')
        saveDeck();
    }
    else if(formType === 'card'){
        console.log('saving card!')
        saveCard();
        populateCard();
    }
}


// addEventListeners('addDeckButton', showDeckForm);
// addEventListeners('addCardButton', showCardForm);
// addEventListeners('cancel', hideForm);
// addEventListeners('check', saveForm);


// drawCardStack(defaultDeck);
// firstDrawDecks(deckArray);
// addForwardBackwardListeners();
// styleCurrent();



