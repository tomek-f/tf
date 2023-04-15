package main

import "fmt"

const elo string = "Elo!"

func main() {
	var card string = "Ace of Spades"
	card2 := newCard()

	card += " and some other card"

	fmt.Println(card)
	fmt.Println(card2)
	fmt.Println(elo)

	cards := []string{"Ace of Diamonds", newCard()}
	cards = append(cards, "Six of Spades")

	for i, card := range cards {
		fmt.Println(i, card)
	}
}

func newCard() string {
	return "Five of Diamonds"
}
