# 問題 1

GET のリクエストヘッダーに X-Test: hello が含まれる場合、レスポンスの headers オブジェクトに X-Test フィールドが表示される

リクエスト

```
curl -H "X-Test: hello" -X GET http://0.0.0.0:80/headers
```

レスポンス

```
{
  "headers": {
    "Accept": "*/*",
    "Host": "0.0.0.0",
    "User-Agent": "curl/7.77.0",
    "X-Test": "hello"
  }
}
```

# 問題 2

POST リクエストが送信され、リクエストヘッダーに Content-Type: application/json が含まれ、リクエストボディに{"name": "hoge"}が含まれます。

リクエスト

```
curl -H "Content-Type: application/json" -X POST -d '{"name": "hoge"}' http://0.0.0.0:80/post
```

レスポンス

```
{
  "args": {},
  "data": "{\"name\": \"hoge\"}",
  "files": {},
  "form": {},
  "headers": {
    "Accept": "*/*",
    "Content-Length": "16",
    "Content-Type": "application/json",
    "Host": "0.0.0.0",
    "User-Agent": "curl/7.77.0"
  },
  "json": {
    "name": "hoge"
  },
  "origin": "172.17.0.1",
  "url": "http://0.0.0.0/post"
}
```

# 問題 3

リクエスト

```
curl -H "Content-Type: application/json" -X POST -d '{"userA": {"name": "hoge", "age": 29}}' https://httpbin.org/post
```

レスポンス

```
{
  "args": {},
  "data": "{\"userA\": {\"name\": \"hoge\", \"age\": 29}}",
  "files": {},
  "form": {},
  "headers": {
    "Accept": "*/*",
    "Content-Length": "38",
    "Content-Type": "application/json",
    "Host": "httpbin.org",
    "User-Agent": "curl/7.77.0",
    "X-Amzn-Trace-Id": "Root=1-649625f9-6c71a0930dec74ba2fa28ce1"
  },
  "json": {
    "userA": {
      "age": 29,
      "name": "hoge"
    }
  },
  "origin": "124.210.123.8",
  "url": "https://httpbin.org/post"
}

```

# 問題 4

リクエスト

```
curl -H "Content-Type: application/x-www-form-urlencoded" -X POST -d '{"name": "hoge"}' https://httpbin.org/post
```

レスポンス

```
{
  "args": {},
  "data": "",
  "files": {},
  "form": {
    "{\"userA\": {\"name\": \"hoge\", \"age\": 29}}": ""
  },
  "headers": {
    "Accept": "*/*",
    "Content-Length": "38",
    "Content-Type": "application/x-www-form-urlencoded",
    "Host": "httpbin.org",
    "User-Agent": "curl/7.77.0",
    "X-Amzn-Trace-Id": "Root=1-6496286f-09744cc57b33c15560e9b084"
  },
  "json": null,
  "origin": "124.210.123.8",
  "url": "https://httpbin.org/post"
}
```

# クイズ

curl コマンドで HTTP リクエストを送信する際、-I オプションは何のために使用されますか？
Postman の「Environment」機能は何をするためのものですか？
