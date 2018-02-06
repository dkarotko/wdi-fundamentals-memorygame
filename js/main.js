console.log('Up and running!');
var cards = [ 
  {
  rank: "queen",
  suit: "hearts",
  cardImage: "images/queen-of-hearts.png",
  },
  {
  rank: "queen",
  suit: "diamonds",
  cardImage: "images/queen-of-diamonds.png",
  },
  {
  rank: "king",
  suit: "hearts",
  cardImage: "images/king-of-hearts.png",
  },
  {
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png",
  }
  ];
var cardsInPlay = [];
var checkForMatch = function () {

  if (cardsInPlay.length === 2) {
    if (cardsInPlay[0] === cardsInPlay[1]) {
      console.log(window.alert('You found a match!'));
    } else {
      console.log(window.alert('Sorry, try again.'));
    }
  }
};

var flipCard = function () {
  // Identify which card
  var cardId = this.getAttribute('data-id');
  var card = cards[cardId];

  console.log('User flipped ' + card.rank);
  console.log(card.cardImage);
  console.log(card.suit);

  // Add the card to the array.
  cardsInPlay.push(card.rank);
  
  // Flip the card image.
  this.setAttribute('src', card.cardImage);

  // Check for match.
  checkForMatch();
};

var createBoard = function () {
  for (var i = 0; i < cards.length; i++) {
    console.log(cards[i].rank + ' '+ 'of' + ' ' + cards[i].suit);

    // Create a card element.
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src', "images/back.png");
    cardElement.setAttribute('data-id', i );

    // Add a listener to it
    cardElement.addEventListener('click', flipCard);

    // Add it to the page.
    document.getElementById('game-board').appendChild(cardElement);
  }
};
createBoard();




//cardElement.getElementsByTagName('ul').appendChild(game-board);








