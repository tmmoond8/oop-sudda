import CardDeck from "./CardDeck";

export default class Dealer {
  private cards: CardDeck;

  constructor(cards: CardDeck) {
    this.cards = cards;
  }
}
