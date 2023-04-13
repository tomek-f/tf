package main

import "fmt"

const elo string = "Elo!"

func main() {
	var card string = "Ace of Spades"
	card2 := "Ace of Spades"

	card += " and some other card"

	fmt.Println(card)
	fmt.Println(card2)
	fmt.Println(elo)
}
