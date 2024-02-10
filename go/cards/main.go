package main

func main() {
	cards := newDeck()

	// hand, remainingCards := deal(cards, 5)

	// cards.print("All cards:")
	// hand.print("\nHand:")
	// remainingCards.print("\nRemaining cards:")

	cards.print("cards to file")
	cards.saveToFile("my_cards")

	cards2 := newDeckFromFile("my_cards")
	cards2.print("cards from file")
}
