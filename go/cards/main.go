package main

func main() {
	// cards := newDeck()

	// hand, remainingCards := deal(cards, 5)

	// cards.print("All cards:")
	// hand.print("\nHand:")
	// remainingCards.print("\nRemaining cards:")

	cards := newDeck()
	// fmt.Println(cards.toString())
	cards.saveToFile("my_cards")
}
