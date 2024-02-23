package main

import (
	"encoding/json"
	"errors"
	"fmt"
	"log"
	"os"
)

type Cache = map[string]string

func getCachePaths() (string, string, error) {
	userCacheDir, err := os.UserCacheDir()

	if err != nil {
		log.Println(err)
		// todo errors
	}

	cacheDir := userCacheDir + "/nnn"
	cacheFile := cacheDir + "/file.json"

	return cacheDir, cacheFile, err
}

func checkCache() {
	cacheDir, cacheFile, err := getCachePaths()

	if err != nil {
		log.Println(err)
		// todo errors
	}

	if _, err := os.Stat(cacheDir); errors.Is(err, os.ErrNotExist) {
		err := os.Mkdir(cacheDir, os.ModePerm)
		if err != nil {
			log.Println(err)
			// todo errors
		}
		fmt.Printf("Created %s dir\n", cacheDir)
	} else {
		fmt.Printf("%s dir already exists\n", cacheDir)
	}

	if _, err := os.Stat(cacheFile); errors.Is(err, os.ErrNotExist) {
		// _, err := os.Create(cacheFile)
		var data Cache = make(map[string]string)
		file, err := json.MarshalIndent(data, "", "  ")
		if err != nil {
			log.Println(err)
			// todo errors
		}

		err = os.WriteFile(cacheFile, file, 0644)
		if err != nil {
			log.Println(err)
			// todo errors
		}
		fmt.Printf("Created %s\n file", cacheFile)
	} else {
		fmt.Printf("%s file already exists\n", cacheFile)
	}
}

func saveDataToCache(key string, value string) {
	_, cacheFile, err := getCachePaths()

	if err != nil {
		log.Println(err)
		// todo errors
	}

	file, err := os.ReadFile(cacheFile)
	if err != nil {
		log.Println(err)
		// todo errors
	}

	var data Cache
	err = json.Unmarshal(file, &data)
	if err != nil {
		log.Println(err)
		// todo errors
	}

	data[key] = value

	file, err = json.MarshalIndent(data, "", "  ")
	if err != nil {
		log.Println(err)
		// todo errors
	}

	err = os.WriteFile(cacheFile, file, 0644)
	if err != nil {
		log.Println(err)
		// todo errors
	}
}
