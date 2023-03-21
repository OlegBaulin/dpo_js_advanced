// import Card from './card.js';
import AmazingCard from './amazingCard.js';

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}

function newGame(container, cardsCount) {
  let cardsNumberArray = [];
  let cardsArray = [];
  let firstCard = null;
  let secondCard = null;

  for(let i = 1; i <= cardsCount / 2; i++) {
    cardsNumberArray.push(i);
    cardsNumberArray.push(i);
  }

  cardsNumberArray = shuffleArray(cardsNumberArray);

  for (const cardNumber of cardsNumberArray) {
    cardsArray.push(new AmazingCard(container, cardNumber, flip))
  }

  function flip(card) {
    if(firstCard !== null && secondCard !== null) {
      if(firstCard._cardNumber != secondCard._cardNumber) {
        firstCard.open = false;
        secondCard.open = false;
        firstCard = null;
        secondCard = null;
      }
    }

    if(firstCard == null) {
      firstCard = card;
    } else {
      if(secondCard === null) {
        secondCard = card;
      }
    }

    if(firstCard !== null && secondCard !== null) {
      if(firstCard._cardNumber == secondCard._cardNumber) {
        firstCard.success = true;
        secondCard.success = true;
        firstCard = null;
        secondCard = null;
      }
    }

    if(document.querySelectorAll('.card.success').length == cardsNumberArray.length) {
      alert('Победа!');
      container.innerHTML = '';
      cardsNumberArray = [];
      cardsArray = [];
      firstCard = null;
      secondCard = null;

      newGame(container, cardsCount)
    }
  }
}

newGame(document.getElementById('game'), 16);
