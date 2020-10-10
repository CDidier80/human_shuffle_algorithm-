# human_shuffle_algorithm-

                                      Shuffle Algorithm Mimicking Imperfect Human Shuffling

The deck is cut into two halves, with one half going in each of the dealer's hands
In a perfect shuffle, the bottom card of one half-deck is placed onto the bottom card of the other half-deck 21 times. The shuffler repeats this a few times.
In code you can represent half-decks with 2 arrays as stacks. Then, alternate between half-decks popping a card and pushing it to a combined, shuffled deck 
The problem is that nobody shuffles perfectly. Oftentimes, 1-4 cards at the bottom of each deck are placed at a time. This shuffle function will adjust for human error.

This shuffle algorithm is not built for scaled performance, rather the close emulation of human shuffling.

The algorithm is implemented here in Javascript. 

myShuffleTestVersion.js includes a basic deck-buildng function (representing a standard 52 card deck) to pass to the shuffle algorithm
myShuffleCommentVersion.js features the same algorithm with guiding comments
myShuffle.js features the standalone code




