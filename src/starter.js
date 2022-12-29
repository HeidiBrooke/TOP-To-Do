const starter = () => {
    const choice = prompt(
      "choose a function: createDeck, or createCard, or viewDecks"
    );
    if (choice === "createDeck") {
      const theDeckName = prompt("Deck name?");
      control.createDeck(theDeckName);
    } else if (choice === "viewDeck") {
      const theDeckName = prompt("Deck name?");
      control.viewDeck(theDeckName);
    } else if (choice === "createCard") {
      const theCardName = prompt("Card name?");
      control.createCard(theCardName);
    } else if (choice === "viewAll") {
      control.viewAll();
    } else if (choice === "addCardtoDeck") {
      const theCardName = prompt("what card?");
      const theCard = control.getCard(theCardName);
      const theDeckName = prompt("what deck?");
      console.log("using deck name: " + theDeckName);
      const anDeck = control.getDeck(theDeckName);
      console.log("the deck entering the function is: " + anDeck);

      control.addCardtoDeck(theCard, anDeck);
    } else if (choice === "deleteCardFromDeck") {
      const theCardName = prompt("what card?");
      const theCard = control.getCard(theCardName);
      const theDeckName = prompt("what deck?");
      console.log("using deck name: " + theDeckName);
      const anDeck = control.getDeck(theDeckName);
      console.log("the deck entering the function is: " + anDeck);

      control.deleteCardFromDeck(theCard, anDeck);
    } else if (choice === "deleteCard") {
      const theCardName = prompt("what card?");
      const thisCard = control.getCard(theCardName);
      control.deleteCard(thisCard);
    } else if (choice === "deleteDeck") {
      const theDeckName = prompt("what deck?");
      control.deleteDeck(theDeckName);
    } else if (choice === "moveCard") {
      const theCardName = prompt("what card?");
      const theFirstDeckName = prompt("from: (what deck?)");
      const theSecondDeckName = prompt("to: (what deck?)");
      control.moveCard(theCardName, theFirstDeckName, theSecondDeckName);
    } else if (choice === "setDate") {
      const theCardName = prompt("what card?");
      control.setDate(theCardName);
    } else if (choice === "addStep") {
      const theCardName = prompt("what card?");
      control.addStep(theCardName);
    } else if (choice === "setStep") {
      const theCardName = prompt("what card?");
      control.setStep(theCardName);
    } else if (choice === "setComplete") {
      const theCardName = prompt("what card?");
      control.setComplete(theCardName);
    } else if (choice === "viewCard") {
      const theCardName = prompt("what card?");
      control.viewCard(theCardName);
    }

    const keepGoing = prompt("want to continue? y/n");
    if (keepGoing === "y") {
      starter();
    }
}