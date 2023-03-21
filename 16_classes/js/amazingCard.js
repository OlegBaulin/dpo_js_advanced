import Card from "./card.js";

export default class AmazingCard extends Card {
  constructor(container, cardNumber, action) {
    super(container, cardNumber, action);
  }

  createElement() {
    super.createElement();
    this.card.textContent = "";
    this.card.append(this.img);
  }

  set cardNumber(value) {
    const cardsImgArray = [
      './img/1.png',
      './img/2.png',
      './img/3.png',
      './img/4.png',
      './img/5.png',
      './img/6.png',
      './img/7.png',
      './img/8.png',
    ];
    this._cardNumber = value;
    const img = document.createElement('img');
    img.src = cardsImgArray[value - 1];
    img.onerror = () => {
      img.src = './img/default.png';
      throw new Error('не удалось загрузить изображение');
    };
    this.img = img;
  }
}
