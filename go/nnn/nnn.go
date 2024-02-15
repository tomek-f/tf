package main

import (
	"encoding/json"
	"fmt"
	"io"
	"log"
	"os"
	"os/exec"

	"github.com/manifoldco/promptui"
)

/*
   * https://www.npmjs.com/package/detect-package-manager
       packageManager field, scripts, files
   * CursorPos
*/

type Scripts map[string]string

type Package struct {
	Name    string  `json:"name"`
	Scripts Scripts `json:"scripts"`
}

type Item struct {
	Key   string
	Value string
}

type Items []Item

func main() {
	var file string

	if len(os.Args) < 2 {
		file = "./package.json"
	} else {
		file = os.Args[1]
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

	var scripts Package

	json.Unmarshal([]byte(byteValue), &scripts)

	// fmt.Println(scripts.Scripts)

	var items Items

	for key, value := range scripts.Scripts {
		items = append(items, Item{Key: key, Value: value})
	}

	// fmt.Println(items[0].Key, items[0].Value)

	templates := &promptui.SelectTemplates{
		Label: "{{ . }}",
		// Active:   "💩 {{ .Key | cyan }} ({{ .Value | red }})",
		Active: "💩 {{ .Key | cyan }}",
		// Inactive: "   {{ .Key | cyan }} ({{ .Value | red }})",
		Inactive: "   {{ .Key | cyan }}",
		Selected: "✅ {{ .Key | green }}",
		// 		Details: `
		// --------- script ----------
		// {{ "Key:" | faint }}	{{ .Key }}
		// {{ "Value:" | faint }}	{{ .Value }}`,
		Details: `Scrip value {{ .Value }}`,
	}

	size := len(items)
	if size > 8 {
		size = 8
	}

	prompt := promptui.Select{
		Label:     "Choose script",
		Size:      size,
		Items:     items,
		Templates: templates,
	}

	// i, result, err := prompt.Run()
	i, _, err := prompt.Run()

	if err != nil {
		fmt.Printf("Prompt failed %v\n", err)
		return
	}

	// fmt.Printf("You choosed -> %s: %s\n", items[i].Key, items[i].Value)

	checkCache()

	cmd := exec.Command("npm", "run", items[i].Key)

	cmd.Stdout = os.Stdout
	cmd.Stderr = os.Stderr
	// cmd.Stdin = os.Stdin
	// log.SetPrefix("run: ")
	log.SetFlags(3)

	if err := cmd.Run(); err != nil {
		log.Fatal(err)
	}
}
