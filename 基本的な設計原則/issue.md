# 基本的な設計原則

## 課題1（SOLID）
### S:単一責任の原則（SRP）
* あるモジュールやクラスや関数などを改修する理由はたった1つになるようにしましょうというもの
* モジュールやクラスや関数をアクター（役割）ごとの責務に応じて適切に分割する
* なんでも共通化すればいいというわけではない
* 実践することで影響範囲の明確化, 改修の容易化というメリットを得られる
* 単純に細かなファイルに分割するだけではなく、責務ごとに分割することが重要
* 参考：[よくわかるSOLID原則1: 単一責任の原則](https://note.com/erukiti/n/n67b323d1f7c5)

### O:オープン・クローズドの原則
* 拡張に対してオープンで、修正に対してクローズドなコードを書こう
* 拡張に対してオープンということは、新しい機能を追加することが容易であること
* 修正に対してクローズドということは、既存のコードを変更することで外部のモジュールに影響を与えないこと
* 例えばインターフェースを用いることで既存のコードを変更することなく拡張できる
* 実践することで拡張しやすく、修正に対して外部が影響を受けないというメリットを得られる
* [サンプルコード](https://www.typescriptlang.org/play?#code/MYGwhgzhAEBKCmwAuYB2BzE9oG8CwAUNNAA4CuARiAJbDQDu1AJkgBYBc0qZAthfACcA3IWLkqtaK3jV0rJJ259BIotGAB7VBCQCyyDQIAUjFhy69+AgDRSZchReUCAlPjXE21CADpTbaABeBmY2VWJPVm8faVl5ILs4pHDoAF9CdIJCUEgYAGFqAVBsdzFKGjoBMCZqMghFSxVRdS0dPQNjKpq6huc3ZsjortqYYOG6lMzMwgB6GehAI31ANqdAOwZAI3TAWS9AJIZACCjAdO9ATQZAaIZAItTAB1NZ+YAhAEEAEU5ABtNAdQZAEQZllcBFhkB+hkAfhkBnhi2gF-4wAFSsdACwagAgVQCADMAwCBgGRwEh4DcBPBIAB5ABmAFkkUhqCQsABlVhgEjwCBbQCQmoAXs2OgFH9QCBkYAZBkAQgxHbKtJDqeGI5Go9FYvEEomk8mU0bQIwQSXwTgIZBoTDYAA+0AKRSwLiCAD5cANoNRsTK5RTsNRtChUMB4BpTUqbar+h4IuikGQBKhoObKX5QqxoAAqX3ymL2eQpYiZCLG7FGMMW43WtB2h2awrFV1x4ger0+v3wHzjGCh3FgNg+AAKAElo2kjWwBBp6NAAKICFvGABEPZcqmmBDm0AAtOOJ5Op9Px4Q5wQrSiBNiwHboGTk6VoOh4Eg0RijC5elZB-OclA4IhnVgAEzGnjE+A8eCoJAwDeUw1u8QVEJmY9NN+5SSLEDgAcIRqaNa7RIIYJiBuBtigfI4E5rmXi+P4QbBFhDaDL4yG8sEhENrGEQ-pIO57sKh5bnG+betAGEBmYIZMVEBGRkgRpTGe4AXlqxR3tQD5YM+r7vvKX5lBIlTVCM4EpFBbT6LBnTyT0ThWGh+Elhp0qlpMzQUXQVH7mAtFGgxPrMaWbEVlWdbNLxWTDvMHybLshynBcbnQAA4pimIPNALzvKsPwAsCYJHFCsL8kilZChiEA4viICEo+H5UrSDJHCyrKAFYMryAID-3LWnyCKJSi5mpaKGXivA2UQHewSyvKnDZbqgQGlu1lJv6Zk0S4GTzoQQA)
* 参考：[よくわかるSOLID原則2: オープン・クローズドの原則](https://note.com/erukiti/n/n959277a74dd0)

### L:リスコフの置換原則
* S が T の派生型であれば、プログラム内で T 型のオブジェクトが使われている箇所は全て S 型のオブジェクトで置換可能という原則
* 例えば、Tというインターフェースを実装したSというクラスでは、Tというインターフェースを実装したS+というクラスに置換可能である
* 実践することで、インターフェースを実装したクラスを変更しても、そのインターフェースを実装したクラスを使っている箇所に影響を与えないというメリットを得られる
* 違反するとインターフェースを利用するクラスにとって意図しない処理が行われる可能性があり不具合の原因になる
* 参考：[よくわかるSOLID原則3: リスコフの置換原則)](https://note.com/erukiti/n/n88b8ed99f1e1)

### I:インターフェース分離の原則
* インターフェースの利用者にとって不要なメソッドに依存させてはいけないというもの
* 簡単にいうとインターフェースの利用者の立場に立って、インターフェース自体、利用用途に応じた最小限の規則だけを決めておくか、それぞれのメソッドが独立して使えるようにすべきということ
* インターフェースに不要なメソッドがあると、それは大体技術的負債になる
* インターフェースを使うと依存性を逆転することができたり、テストがしやすくなったりする
* 実践することで、高凝集かつ疎結合なコードを書くことができるというメリットを得られる
* 参考：[よくわかるSOLID原則4: インターフェース分離の原則)](https://note.com/erukiti/n/n3daa55541bc8)

### D（依存性逆転の原則）
* 設計上望ましい依存の方向性と、素直に実装しようとしたときの方向性は矛盾しちゃうので、そこをテクニックでカバーして逆転させると、じつはスッキリと望ましい設計通りに実装できる
* 抽象（例えばインターフェース）に依存 + DependencyInjectionを組み合わせれば依存の向きを逆転できる
* 実践することで、変更の影響を受けにくい部分に依存するようなコードを書くことができるというメリットを得られる
* 例えばドメイン駆動設計におけるドメイン層に依存させたい時に、インターフェースを使って依存性を逆転させる（オニオンアーキテクチャなど）
* 参考：[よくわかるSOLID原則5: 依存性逆転の原則)](https://note.com/erukiti/n/n913e571e8207)

### デメテルの法則
TDOO