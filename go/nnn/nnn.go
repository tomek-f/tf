package main

import (
	"encoding/json"
	"fmt"
	"io"
	"os"
	"strconv"

	"github.com/manifoldco/promptui"
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
	var file string

	if len(os.Args) < 2 {
		file = "users.json"
	} else {
		file = os.Args[1]
	}

	if file == "" {
		file = "users.json"
	}

	jsonFile, err := os.Open(file)

	if err != nil {
		fmt.Println(err)
		os.Exit(1) // or panic(err) or return
	}

	fmt.Println("Successfully opened " + file)

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

	type pepper struct {
		Name     string
		HeatUnit int
		Peppers  int
	}

	peppers := []pepper{
		{Name: "Bell Pepper", HeatUnit: 0, Peppers: 0},
		{Name: "Banana Pepper", HeatUnit: 100, Peppers: 1},
		{Name: "Poblano", HeatUnit: 1000, Peppers: 2},
		{Name: "Jalapeño", HeatUnit: 3500, Peppers: 3},
		{Name: "Aleppo", HeatUnit: 10000, Peppers: 4},
		{Name: "Tabasco", HeatUnit: 30000, Peppers: 5},
		{Name: "Malagueta", HeatUnit: 50000, Peppers: 6},
		{Name: "Habanero", HeatUnit: 100000, Peppers: 7},
		{Name: "Red Savina Habanero", HeatUnit: 350000, Peppers: 8},
		{Name: "Dragon`s Breath", HeatUnit: 855000, Peppers: 9},
	}

	templates := &promptui.SelectTemplates{
		Label:    "{{ . }}?",
		Active:   "🟢 {{ .Name | cyan }} ({{ .HeatUnit | red }})",
		Inactive: "   {{ .Name | cyan }} ({{ .HeatUnit | red }})",
		// Selected: "\U0001F336 {{ .Name | red | cyan }}",
		Details: `
--------- Pepper ----------
{{ "Name:" | faint }}	{{ .Name }}
{{ "Heat Unit:" | faint }}	{{ .HeatUnit }}
{{ "Peppers:" | faint }}	{{ .Peppers }}`,
	}

	prompt := promptui.Select{
		Label:     "Spicy Level",
		Size:      5,
		Items:     peppers,
		Templates: templates,
		// Items: []string{"Monday", "Tuesday", "Wednesday", "Thursday", "Friday",
		// 	"Saturday", "Sunday"},
	}

	// i, result, err := prompt.Run()
	i, _, err := prompt.Run()

	if err != nil {
		fmt.Printf("Prompt failed %v\n", err)
		return
	}

	fmt.Printf("You choose index %d: %s\n", i, peppers[i].Name)
}
