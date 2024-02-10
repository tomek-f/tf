# blog

https://blog.jetbrains.com/go/2022/11/08/build-a-blog-with-go-templates

## run

`go run .`

`go run blog`

`go run main.go db.go`

`go run *.go` (slow)

## list updates

`go list -u -m all`

## update

`go get -u blog`

## update go in module

you can just delete the go line, and run `go mod tidy`

or

```go
go mod edit -go 1.22
go mod tidy
```
