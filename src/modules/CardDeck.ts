import Card from "./Card";

export default class CardDeck {
  private deck: Card[];

  constructor(deck?: Card[]) {
    if (deck) {
      this.deck = deck;
    } else {
      this.deck = [];
    }
  }

  shuffle(): void {
    this.deck.sort(() => Math.random() - 0.5);
  }

  pop(): Card | null {
    const card = this.deck.pop();
    return card ?? null;
  }
}
