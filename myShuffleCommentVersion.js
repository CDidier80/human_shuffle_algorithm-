const myShuffle = function(deck, numberOfShuffles) {

    // initialize empty array to hold shuffled deck
    let shuffledDeck = []
    // cut the deck in half
    let deckHalfOne = deck.slice(0, (deck.length / 2))
    let deckHalfTwo = deck.slice((deck.length / 2),) 
  
    // a function that removes a certain number of cards from a half deck and pushes them to the shuffled eck
    const popAndPushSomeCards = function(half, numOfCards) {  
      for(i=0; i < numOfCards; i++) {
        shuffledDeck.push(half.pop())
      }
    }
    // numberOfShuffles value specifies how many times to shuffle the deck
    for(i = 0; i < numberOfShuffles; i++) {
      // mix the cards together until both half-decks are empty and 1 shuffled deck remains
      while (deckHalfOne.length > 0 || deckHalfTwo.length > 0) {
        // Most people can't shuffle perfectly. Change the number of cards added to the shuffled deck from each pile with each mix   
        let firstRandom =  Math.ceil(Math.random() * 4), secondRandom = Math.ceil(Math.random() * 4)
        // if the random number is greater than the number of cards left, ignore it and add the remaining cards to the deck
        d1PopNum = firstRandom < deckHalfOne.length ? firstRandom : deckHalfOne.length
        d2PopNum = secondRandom < deckHalfTwo.length ? secondRandom : deckHalfTwo.length
        // call the function responsible for mixing the decks together
        popAndPushSomeCards(deckHalfOne, d1PopNum)                                            
        popAndPushSomeCards(deckHalfTwo, d2PopNum)
        }
      // Unless this was the last shuffle, cut the deck in half and empty the shuffled deck array to start again                                                        
      deckHalfOne = shuffledDeck.slice(0, (shuffledDeck.length / 2))         
      deckHalfTwo = shuffledDeck.slice((shuffledDeck.length / 2),)
      shuffledDeck = (i === (numberOfShuffles - 1)) ? shuffledDeck : []
      }   
    return shuffledDeck 
  }
  