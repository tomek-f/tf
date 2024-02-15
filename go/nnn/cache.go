package main

import (
	"errors"
	"fmt"
	"log"
	"os"
)

const cacheDir = ".cache"
const cacheFile = cacheDir + "file.json"

func checkCache() {
	if _, err := os.Stat(cacheDir); errors.Is(err, os.ErrNotExist) {
		err := os.Mkdir(cacheDir, os.ModePerm)
		if err != nil {
			log.Println(err)
			// todo errors
		}
		fmt.Printf("Created %v\n", cacheDir)
	} else {
		fmt.Printf("%v already exists\n", cacheDir)
	}

	if _, err := os.Stat(cacheFile); errors.Is(err, os.ErrNotExist) {
		_, err := os.Create(cacheFile)
		if err != nil {
			log.Println(err)
			// todo errors
		}
		fmt.Printf("Created %v\n", cacheFile)
	} else {
		fmt.Printf("%v already exists\n", cacheFile)
	}
}
