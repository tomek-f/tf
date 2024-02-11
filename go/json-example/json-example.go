package main

import (
	"encoding/json"
	"fmt"
	"io"
	"os"
	"strconv"
)

type Users struct {
	Users []User `json:"users"`
}

type User struct {
	Name   string `json:"name"`
	Type   string `json:"type"`
	Age    int    `json:"age"`
	Social Social `json:"social"`
}

type Social struct {
	Facebook string `json:"facebook"`
	Twitter  string `json:"twitter"`
}

func main() {
	jsonFile, err := os.Open("./users.json")

	if err != nil {
		fmt.Println(err)
		os.Exit(1) // or panic(err)
	}

	fmt.Println("Successfully opened `users.json`")

	// defer the closing of our jsonFile so that we can parse it later on
	defer jsonFile.Close()

	// read our opened JSON file as a byte array.
	byteValue, _ := io.ReadAll(jsonFile)

	// we initialize our Users array
	var users Users

	// we unmarshal our byteArray which contains our
	// jsonFile's content into 'users' which we defined above
	json.Unmarshal(byteValue, &users)

	// for i := 0; i < len(users.Users); i++ {
	// 	fmt.Println("User type: " + users.Users[i].Type)
	// 	fmt.Println("User age: " + strconv.Itoa(users.Users[i].Age))
	// 	fmt.Println("User name: " + users.Users[i].Name)
	// 	fmt.Println("Facebook url: " + users.Users[i].Social.Facebook)
	// 	fmt.Println("Twitter url: " + users.Users[i].Social.Twitter)
	// }

	for _, user := range users.Users {
		fmt.Println("")
		fmt.Println("User type: " + user.Type)
		fmt.Println("User age: " + strconv.Itoa(user.Age))
		fmt.Println("User name: " + user.Name)
		fmt.Println("Facebook url: " + user.Social.Facebook)
		fmt.Println("Twitter url: " + user.Social.Twitter)
	}
}
