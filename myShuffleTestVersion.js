
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

    console.log("Number of shuffles: ", numberOfShuffles)

    let shuffledDeck = []
    let deckHalfOne = deck.slice(0, (deck.length / 2))
    let deckHalfTwo = deck.slice((deck.length / 2),) 
  
    console.log("\nFirst version of half-deck one: ", deckHalfOne)
    console.log("Items in half-deck 1: ", deckHalfOne.length)
    console.log("First version of half-deck two: ", deckHalfTwo)
    console.log("Items in half-deck 1: ", deckHalfOne.length, " \n \n")

    const popAndPushSomeCards = function(half, numOfCards, testMessage){
      console.log(testMessage)
      let deckPoppedCount = 0    
      for(i=0; i < numOfCards; i++) {
        shuffledDeck.push(half.pop())
        deckPoppedCount += 1
      }
      console.log(`Popped ${deckPoppedCount} cards.`)
    }

    for(i = 0; i < numberOfShuffles; i++) {
      console.log(`Shuffle Iteration: ${i+1} begins now...\n \n \n \n`)   
                               
      while (deckHalfOne.length > 0 || deckHalfTwo.length > 0) {   

        let firstRandom =  Math.ceil(Math.random() * 4), secondRandom = Math.ceil(Math.random() * 4)

        console.log(`Random Number for first deck: ${firstRandom}     (comapred to ${deckHalfOne.length} cards left)`)
        console.log(`Random Number for second deck: ${secondRandom}   (commpred to ${deckHalfTwo.length} cards left) \n`)

        d1PopNum = firstRandom < deckHalfOne.length ? firstRandom : deckHalfOne.length
        d2PopNum = secondRandom < deckHalfTwo.length ? secondRandom : deckHalfTwo.length

        console.log(` \nDeck 1 Number to pop: ${d1PopNum}`)
        console.log(`Deck 2 Number to pop: ${d2PopNum}`)

        popAndPushSomeCards(deckHalfOne, d1PopNum, "popAndPushSomeCards() reached for deck half1")                                            
        popAndPushSomeCards(deckHalfTwo, d2PopNum, "popAndPushSomeCards() reached for deck half2")
        console.log("----------------------------------------------\n")

        }
      console.log(`Shuffle Iteration: ${i+1} ends now.\n \n`)                                                            
      deckHalfOne = shuffledDeck.slice(0, (shuffledDeck.length / 2))         
      deckHalfTwo = shuffledDeck.slice((shuffledDeck.length / 2),)
      shuffledDeck = (i === (numberOfShuffles - 1)) ? shuffledDeck : []   // if last shuffle, don't empty the shuffled deck                                      
    }  
    return shuffledDeck 
}

  
  let newDeck = buildDeck()
let newShuffledDeck = myShuffle(newDeck, 5)
console.log(newShuffledDeck)
console.log("Length of shuffled deck: ", newShuffledDeck.length)