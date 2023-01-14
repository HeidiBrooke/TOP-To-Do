const resetFormDeck = () => {
    const aDiv = document.getElementById('card-title');
    aDiv.value = '';
}

const showDeckForm = () => {
    showForm();
    formType = 'deck';
    let aDiv = document.getElementById('cardSteps');
    aDiv.style.visibility = 'hidden';
    aDiv = document.getElementById('date');
    aDiv.style.visibility = 'hidden';
    aDiv = document.getElementById('cardDeck');
    aDiv.style.visibility = 'hidden';
    aDiv = document.getElementById('card-title');
    aDiv.style.gridRow = '3/4';
    
}