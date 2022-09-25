# 外部キー制約について考える

## 課題1
### 外部キー制約を一切定義しないと起きる問題
* BookテーブルとAuthorテーブルの関係性が機械的に可視化されない（自動でER図を生成できない）
* Bookテーブルのauthor_idカラムにAuthorテーブルのidカラムに存在しない値が混入する可能性を防げない

### 外部キー制約を定義することで起きる問題
* 参照アクションによっては意図せずレコードの改変が行われる可能性がある
    * 例：Authorテーブルのレコードを削除した際にBookテーブルのレコードが削除されてしまう
* 参照アクションによってはレコードを変更する手間が大変になる
    * 例：Bookテーブルのレコードを削除しないと、Authorテーブルのレコードを削除できない

## 課題2

### ON UPDATE RESTRICT, ON UPDATE NO ACTION
* 子テーブルのレコードが親テーブルのレコード変更に追従せずエラーになる
* ユースケース
    * 子テーブルと親テーブルの変更手順を分離したい時に用いる
    * 自分としてはデフォルトで設定しておきたい

### ON UPDATE CASCADE
* 子テーブルのレコードが親テーブルのレコードの変更に追従する
* ユースケース
    * 種類テーブルのidを変更した際に、商品テーブルの種類カラムのidを追従したい
        * そもそもサロゲートキーを使用するので起こりづらい
    * 必要なタイミングで設定し直したい

### ON UPDATE SET NULL
* UPDATEしても、エラーにはならないがNULLがセットされる
* ユースケース
    * 思いつかない。自分では使用することはなさそう。

### ON DELETE RESTRICT, ON DELETE NO ACTION
* 子テーブルのレコードが親テーブルのレコード削除に追従せずエラーになる
* ユースケース
    * 子テーブルと親テーブルの削除手順を分離したい時に用いる
    * 自分としてはデフォルトで設定しておきたい

### ON DELETE CASCADE
* 子テーブルのレコードが親テーブルのレコードの削除に追従して削除される
* ユースケース
    * 思いつかない。レコードをDELETEするよりもアクティブかどうかのステータスで判断する方が便利。

### ON DELETE SET NULL
* DELETEしても、エラーにはならないがNULLがセットされる
* ユースケース
    * 思いつかない。自分では使用することはなさそう。

### 参考情報
* [MySQLの外部キー制約RESTRICT,CASCADE,SET NULL,NO ACTIONの違いは？](https://qiita.com/suin/items/21fe6c5a78c1505b19cb)
* [MySQLの外部キー（Foreign Key）制約
](https://gihyo.jp/dev/serial/01/mysql-road-construction-news/0063)

## 想定ケース

### 想定ケース: 従業員管理サービス
* 前提: 部署が削除されても従業員は存在し続ける
* 部署が削除されると従業員も削除されてしまうという問題が潜んでいる。

### 想定ケース: プロジェクトマネジメントツール
* 担当者が削除された場合に、担当者が任命されていない案件ができてしまうという問題が潜んでいる

## ORMapper

### MyBatis
* スキーマからテーブルが自動生成する機能はない
* DSLにcreate tableが存在しない
* SQLでテーブルを作成する必要がある

### JOOQ
* スキーマからテーブルが自動生成する機能はない
* DSLにcreate tableが存在する
    * 参照アクションのデフォルト値: なし
    * https://www.jooq.org/doc/latest/manual/sql-building/ddl-statements/create-statement/create-table-statement/create-table-foreign-key/

## RESTRICTとNO ACTIONの違い
* MySQL
    * RESTRICT, NO ACTIONは同じ
* PostgresSQL
    * NO ACTION: トランザクション中に参照元もDELETEしないとトランザクション失敗する
    * RESTRICT: 参照先のDELETE時点でトランザクションの失敗が確定する


## 課題3
* クイズ1: PostgresSQLの参照アクションはそれぞれどのような挙動になっているか？
* クイズ2: 仕事で扱っているDBのどんなテーブルにどんな参照アクションが貼られていますか？
* クイズ3: NoSQLにおいて参照アクションに相当するものはありますか？
