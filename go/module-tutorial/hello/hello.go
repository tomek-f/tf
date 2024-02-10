package main

import (
	"fmt"
	"log"

	"tomekf.pl/greetings"
)

func main() {
	log.SetPrefix("greetings: ")
	log.SetFlags(3)

	names := []string{"Gladys", "Samantha", "Darrin"}

	// message, err := greetings.Hello("Gladys")
	messages, err := greetings.Hellos(names)

	if err != nil {
		log.Fatal(err)
	}

	// fmt.Println(message)
	fmt.Println(messages)
}
