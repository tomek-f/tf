https://stackoverflow.com/a/63768513

Facebook JSON badly encoded

```sh
brew install jq
cat message_1.json | jq . | iconv -f utf8 -t latin1 > m1.json
```
