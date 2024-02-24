package main

import (
	"encoding/json"
	"fmt"
	"io"
	"log"
	"os"
	"os/exec"
	"strings"

	"github.com/manifoldco/promptui"
)

/*
   * https://www.npmjs.com/package/detect-package-manager
       packageManager field, scripts, files
   * CursorPos
     * cache ✅
     * global cache
     * show last chosen option
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

	mydir, err := os.Getwd()
	if err != nil {
		fmt.Println(err)
		// todo errors
	}
	fmt.Println("Current dir:", mydir)

	if len(os.Args) < 2 {
		file = mydir + "/package.json"
	} else {
		file = os.Args[1]
	}

	jsonFile, err := os.Open(file)

	if err != nil {
		fmt.Println(err)
		os.Exit(1) // or panic(err) or return
	}

	fmt.Println("Successfully opened: " + file)

	// defer the closing of our jsonFile so that we can parse it later on
	defer jsonFile.Close()

	// read our opened JSON file as a byte array.
	byteValue, _ := io.ReadAll(jsonFile)

	// to keep order of scripts in package.json
	dec := json.NewDecoder(strings.NewReader(string(byteValue)))

	var packageName string
	inScripts := false
	var itemsTemp Items
	index := 0
	counter := 0
	valueFromCache, err := getDataFromCache(mydir)

	if err != nil {
		// log.Println(err) // key not found
		fmt.Println("no previous value in cache")
		// todo errors
	} else {
		fmt.Println("valueFromCache:", valueFromCache)
	}

	for {
		key, err := dec.Token()
		if err == io.EOF {
			break
		}
		if err != nil {
			log.Fatal(err)
		}
		// fmt.Printf("key: %v (%T)", key, key)

		if _, ok := key.(json.Delim); !ok {
			value, err := dec.Token()
			if err == io.EOF {
				break
			}
			if err != nil {
				log.Fatal(err)
			}

			if key == "name" && !inScripts {
				packageName = value.(string)
			}

			if inScripts {
				if _, ok := value.(json.Delim); !ok {
					itemsTemp = append(itemsTemp, Item{Key: key.(string), Value: value.(string)})
					if key == valueFromCache {
						index = counter
					}
					counter++
				}
			}

			if key == "scripts" {
				if _, ok := value.(json.Delim); ok {
					inScripts = true
					// fmt.Printf(" (inScripts)")
				}
			}

			// fmt.Printf(" value: %v (%T)", value, value)
		} else {
			if inScripts {
				inScripts = false
				// fmt.Printf(" (end inScripts)")
			}
		}
	}

	// fmt.Print(itemsTemp)

	fmt.Println("packageName:", packageName)

	// var scripts Package

	// json.Unmarshal([]byte(byteValue), &scripts)

	// fmt.Println(scripts.Scripts)

	checkCache()

	// var items Items
	// var index int = 0
	// counter := 0
	// valueFromCache, err := getDataFromCache(mydir)

	// if err != nil {
	// 	// log.Println(err) // key not found
	// 	fmt.Println("no previous value in cache")
	// 	// todo errors
	// } else {
	// 	fmt.Println("valueFromCache:", valueFromCache)
	// }

	// TODO better version, maybe normal for loop
	// for key, value := range scripts.Scripts {
	// 	items = append(items, Item{Key: key, Value: value})
	// 	if key == valueFromCache {
	// 		index = counter
	// 	}
	// 	counter++
	// }

	fmt.Println("index:", index)

	// read VALUE foem cache

	// fmt.Println(items[0].Key, items[0].Value)

	// TODO pass VALUE to
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

	size := len(itemsTemp)
	if size > 8 {
		size = 8
	}

	// TODO if index is bigger than size, scroll items by changing order

	prompt := promptui.Select{
		Label:     "Choose script",
		Size:      size,
		Items:     itemsTemp,
		Templates: templates,
		CursorPos: index,
	}

	// i, result, err := prompt.Run()
	i, _, err := prompt.Run()

	if err != nil {
		fmt.Printf("Prompt failed %v\n", err)
		return
	}

	// fmt.Printf("You choosed -> %s: %s\n", items[i].Key, items[i].Value)

	script := itemsTemp[i].Key

	// TODOsave VALUE only if not the same?
	saveDataToCache(mydir, script)

	// npm, yarn, pnpm, bun
	cmd := exec.Command("npm", "run", script)

	cmd.Stdout = os.Stdout
	cmd.Stderr = os.Stderr
	// cmd.Stdin = os.Stdin
	// log.SetPrefix("run: ")
	log.SetFlags(3)

	if err := cmd.Run(); err != nil {
		log.Fatal(err)
	}
}
