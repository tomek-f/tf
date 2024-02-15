package main

import (
	"encoding/json"
	"errors"
	"fmt"
	"log"
	"os"
)

// type Scripts map[string]string

// type Package struct {
// 	Name    string  `json:"name"`
// 	Scripts Scripts `json:"scripts"`
// }

type Cache = map[string]string

const cacheDir = ".cache"
const cacheFile = cacheDir + "/file.json"

func checkCache() {
	if _, err := os.Stat(cacheDir); errors.Is(err, os.ErrNotExist) {
		err := os.Mkdir(cacheDir, os.ModePerm)
		if err != nil {
			log.Println(err)
			// todo errors
		}
		fmt.Printf("Created %v dir\n", cacheDir)
	} else {
		fmt.Printf("%v dir already exists\n", cacheDir)
	}

	if _, err := os.Stat(cacheFile); errors.Is(err, os.ErrNotExist) {
		// _, err := os.Create(cacheFile)
		var data Cache = make(map[string]string)
		file, err := json.MarshalIndent(data, "", " ")
		if err != nil {
			log.Println(err)
			// todo errors
		}

		err = os.WriteFile(cacheFile, file, 0644)
		if err != nil {
			log.Println(err)
			// todo errors
		}
		fmt.Printf("Created %v\n file", cacheFile)
	} else {
		fmt.Printf("%v file already exists\n", cacheFile)
	}
}
