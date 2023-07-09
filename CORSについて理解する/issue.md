# 課題 1（質問）

## CORS の仕組みとは

CORS（Cross-Origin Resource Sharing）は、Web ブラウザが安全に異なるドメイン間でリクエストを行うための仕組み

### preflight request

- 特定の種類のクロスオリジンリクエストを行う前に、ブラウザによって自動的に送信される HTTP OPTIONS リクエスト
- サーバーの許可を確認するために、実際のリクエストの安全性をチェックする役割を果たす
- Access-Control-Request-Method や Access-Control-Request-Headers などのヘッダーが含まれており、これによってサーバーに対して実際のリクエストのメソッドやヘッダーの意図を伝える

### simple-request

- シンプルリクエストは、特定の条件を満たし、プリフライトリクエストをトリガーしない HTTP リクエスト
- シンプルリクエストには、以下の条件を満たす必要がある
  - 安全なメソッド（GET、HEAD、POST）のみを使用すること
  - Accept、Accept-Language、Content-Language、Content-Type（特定の値のみ）など、特定の種類のヘッダーのみを含むこと
  - リクエストの Content-Type は、許可されたタイプのいずれかであること
- シンプルリクエストはプリフライトリクエストを必要とせずに直接サーバーに送信される
- サーバーは要求されたリソースを含むレスポンスを返し、もしも適切な Access-Control-Allow-Origin ヘッダーが含まれていれば、ブラウザは要求元のドメインからのアクセスを許可する

### Access-Control-Allow-Origin

- Access-Control-Allow-Origin ヘッダーは、サーバーが自身のリソースに対してクロスオリジンリクエストを許可するドメインを示すために送信するレスポンスヘッダー
- このヘッダーは、アクセスを許可するドメインまたはドメインのリストを指定する
- たとえば、サーバーが次のようなヘッダーをレスポンスに含める場合、リソースは https://example.com からのクロスオリジンリクエストを許可する

```
Access-Control-Allow-Origin: https://example.com
```

## Access-Control-Allow-Origin/\* を設定するべきではない理由

- どのドメインからのリクエストでもアプリケーションにアクセスが許可される
- 攻撃者は悪意のあるウェブサイトを作成し、JavaScript を使用してリクエストを送信することができる
- 銀行のアプリケーションなど、個人情報や機密情報を抜き取られてしまう危険性がある

## preflight request が送信されない「シンプルなリクエスト」に該当するための条件

- シンプルリクエストには、以下の条件を満たす必要がある
  - 安全なメソッド（GET、HEAD、POST）のみを使用すること
  - Accept、Accept-Language、Content-Language、Content-Type（特定の値のみ）など、特定の種類のヘッダーのみを含むこと
  - リクエストの Content-Type は、許可されたタイプのいずれかであること
    - text/plain
    - application/x-www-form-urlencoded
    - multipart/form-data

## サーバからのレスポンスの Access-Control-Allow-Origin ヘッダーに、リクエスト送信元のオリジンが含まれない場合、ブラウザはどのような挙動

- Access-Control-Allow-Origin ヘッダーがリクエストを送信したドメインを含まない場合、ブラウザはセキュリティ制約によってレスポンスをブロックする

## HTML の a タグを辿って異なるオリジンに移動する際は、特に CORS 制約は発生しない理由

- CORS の目的は、ウェブページが異なるオリジンから情報を安全に取得できるようにすること。これにより、悪意のあるウェブサイトがユーザーのデータを盗むことを防ぐことできる
- しかし、ユーザーが直接異なるオリジンのページに移動する場合、それは新しいコンテキストであり、新しいページはそのオリジンの下で実行される。このため、この状況では CORS の制約は必要ない。

## XMLHttpRequest を使ってクロスオリジンリクエストを発行する際、デフォルトの挙動だとリクエストにクッキーが含まれません。クッキー情報を含むためには、何をする必要があるでしょうか？

- XMLHttpRequest を使用してクロスオリジンリクエストを発行する際に、リクエストにクッキーを含めるためには、リクエストを作成する前に withCredentials プロパティを true に設定する必要がある

```
var xhr = new XMLHttpRequest();
xhr.open('GET', 'http://example.com/', true);
xhr.withCredentials = true;
xhr.send(null);
```

- 上記のコードでは、withCredentials プロパティを true に設定することで、クロスオリジンリクエストにクッキーが含まれるようになる
- ただし、注意点として、この設定を行った場合でも、サーバ側でも対応する設定を行う必要がある
- 具体的には、サーバーがレスポンスで Access-Control-Allow-Credentials ヘッダーを true に設定し、かつ Access-Control-Allow-Origin ヘッダーに具体的なオリジン（\*ではなく）を設定する必要がある

# 課題 2（クイズ）

CORS のエラーは JavaScript から知ることができますか？

# 課題 3（実装）

app 参照

許可されたオリジンからの POST リクエスト（成功するはず）：

```
curl -v -X POST -H "Origin: https://b212-124-210-123-8.ngrok-free.app" -H "Content-Type: application/json" http://localhost:3000
```

許可されていないオリジンからの POST リクエスト（失敗するはず）：

```
curl -v -X POST -H "Origin: https://not-allowed-origin.com" -H "Content-Type: application/json" http://localhost:3000
```

許可されたオリジンからの GET リクエスト（成功するはず）：

```
curl -v -H "Origin: https://b212-124-210-123-8.ngrok-free.app" http://localhost:3000
```

許可されていないオリジンからの GET リクエスト（失敗するはず）：

```
curl -v -H "Origin: https://not-allowed-origin.com" http://localhost:3000
```

# 課題 4（成果物に関する質問）

- curl からのリクエストが CORS 制約により拒否されるかどうかは、あくまでブラウザーの挙動を模倣するもの
- 実際には、curl や他の HTTP クライアントツールは CORS ポリシーを尊重しない
- CORS はブラウザのセキュリティメカニズムであり、ブラウザ外からのリクエスト（curl など）には適用されない
- したがって、curl コマンドを使用して POST リクエストを送信すると、CORS エラーは発生しない
- ただし、サーバー側で明示的にオリジンをチェックしてエラーレスポンスを返すように設定している場合、エラーになる
