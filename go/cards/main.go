package main

import "fmt"

func main() {
	cards := newDeck()

	hand, remainingCards := deal(cards, 5)

	fmt.Println("All cards:")
	cards.print()
	fmt.Println("\nHand:")
	hand.print()
	fmt.Println("\nRemaining cards:")
	remainingCards.print()
}
