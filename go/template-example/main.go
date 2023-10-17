package main

import (
	"html/template"
	"os"
)

func main() {
	tmpl := "Hello {{.Name}}!\n" // \n removes % at the end

	type User struct {
		Name string
	}

	user := User{"James"}
	t, err := template.New("test").Parse(tmpl)

	if err != nil {
		panic(err)
	}

	err = t.Execute(os.Stdout, user)

	if err != nil {
		panic(err)
	}
}
