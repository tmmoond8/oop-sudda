import Card from "./Card";

export default class Player {
  private cards: Card[];

  constructor() {
    this.cards = [];
  }

  receiveCard(card: Card) {
    this.cards.push(card);
  }

  openCards() {
    return this.cards;
  }
}
