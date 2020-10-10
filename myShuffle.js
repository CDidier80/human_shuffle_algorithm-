

//                                               Shuffle Algorithm Mimicking Imperfect Human Shuffling
//
// The deck is cut into two halves, with one half going in each of the dealer's hands
// Visualize the movement of the cards in a hand shuffle...
// In a perfect shuffle, the bottom card of one half-deck is placed onto the bottom card of the other half-deck 21 times. The shuffler repeats this a few times.
// In code you can represent half-decks with 2 arrays acting as stacks. Then, alternate between half-decks popping a card and pushing it to a combined, shuffled deck 
// But nobody shuffles perfectly. Oftentimes, 1-4 cards at the bottom of each deck are placed at a time. This shuffle function will adjust for that fact.
//
// This shuffle algorithm is not built for scaled performance, rather the close emulation of imperfect human shuffling.




function buildDeck() {
    const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    const suits = ['spades', 'hearts', 'diamonds', 'clubs'];
  
    const deck = []
    ranks.forEach(function(cardRank, index){      // rank first
      suits.forEach(function(cardSuit){           // suits second 
        let card = {suit: cardSuit, rank: cardRank, value: index}  // value assigned based on rank
        deck.push(card)
      })
    })
    return deck
  }

const myShuffle = function(deck, numberOfShuffles) {

    let shuffledDeck = []
    let deckHalfOne = deck.slice(0, (deck.length / 2))
    let deckHalfTwo = deck.slice((deck.length / 2),) 

    const popAndPushSomeCards = function(half, numOfCards) {  
      for(i=0; i < numOfCards; i++) {
        shuffledDeck.push(half.pop())
      }
    }
    for(i = 0; i < numberOfShuffles; i++) {
      while (deckHalfOne.length > 0 || deckHalfTwo.length > 0) { 
        let firstRandom =  Math.ceil(Math.random() * 4), secondRandom = Math.ceil(Math.random() * 4)
        d1PopNum = firstRandom < deckHalfOne.length ? firstRandom : deckHalfOne.length
        d2PopNum = secondRandom < deckHalfTwo.length ? secondRandom : deckHalfTwo.length
        popAndPushSomeCards(deckHalfOne, d1PopNum)                                            
        popAndPushSomeCards(deckHalfTwo, d2PopNum)
        }                                                    
      deckHalfOne = shuffledDeck.slice(0, (shuffledDeck.length / 2))         
      deckHalfTwo = shuffledDeck.slice((shuffledDeck.length / 2),)
      shuffledDeck = (i === (numberOfShuffles - 1)) ? shuffledDeck : []
      }   
    return shuffledDeck 
  }