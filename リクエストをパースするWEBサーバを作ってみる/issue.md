# 課題 1（実装）

app を参照してください

# 課題 2（質問）

- Content-Type ヘッダーは、HTTP リクエストのボディのメディアタイプ（データ形式）を指定す
- application/x-www-form-urlencoded：このメディアタイプは、HTML フォームの送信に一般的に使用される
  - データはキーと値のペアとしてエンコードされ、ペアは&で区切られ、キーと値は=で区切られる。
  - たとえば、key1=value1&key2=value2 のようになります。値は URL エンコード（パーセントエンコーディング）されるため、特殊文字も安全に送信できる
- application/json：このメディアタイプは、データを JSON 形式で送信するときに使用される。
- これらの違いは、サーバーがリクエストボディをどのように解析するかに影響する
- Content-Type が application/x-www-form-urlencoded であれば、サーバーはリクエストボディを URL エンコードされた形式として解析する
- 一方、Content-Type が application/json であれば、サーバーはリクエストボディを JSON として解析する
