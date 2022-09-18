# マルチテナントアーキテクチャ

## シングルテナント
- テナントごとにサービス（アプリ/データ層）を分割する方式

## マルチテナント
- サービス（アプリ/データ層）を複数のテナントで使用する方式
- メリット：リソースや運用コストを大幅に低減することができる

# データベースにおけるSaaSパーティショニングモデル
## サイロモデル
- シングルテナント形式
- メリットデメリット：[https://gyazo.com/69fddb278ddc6bc55e7cdb67b499b081](https://gyazo.com/69fddb278ddc6bc55e7cdb67b499b081)

## ブリッジモデル
- マルチテナント形式
- データベースは共通
- テナントごとにスキーマが分離
- メリットデメリット：[https://gyazo.com/0a6748645a3a26151d641f56b8958ed1](https://gyazo.com/0a6748645a3a26151d641f56b8958ed1)

## プールモデル
- マルチテナント形式
- データベースは共通
- テナントIDによる行の特定
- メリットデメリット：[https://gyazo.com/66c69ff6ee33b6955b2266f1de95bf31](https://gyazo.com/66c69ff6ee33b6955b2266f1de95bf31)

## ハイブリッドモデル

- マルチテナント形式
- プールモデルとサイロモデルを組み合わせる
- メリットデメリット：[https://gyazo.com/30b6d1fdcf4052a5905ebd818b8ff08d](https://gyazo.com/30b6d1fdcf4052a5905ebd818b8ff08d)

# 参考情報
- [マルチテナント・アーキテクチャ - ＠IT](https://atmarkit.itmedia.co.jp/fdotnet/bookpreview/azureoverview_0301/azureoverview_0301_01.html)
- [マルチテナント化で知っておきたいデータベースのこと](https://www.slideshare.net/AmazonWebServicesJapan/20220107-multi-tenant-database)

[](https://d1.awsstatic.com/whitepapers/ja_JP/saas-tenant-isolation-strategies.pdf)

# 課題1の回答

マルチテナントアーキテクチャの採用を検討する

Row Level Securityによる制御であれば自身のテナントのデータしか取得できないので事故を防ぐことができる（個々の努力で防ぐより仕組みで防ぐべき）

なお、MySQLはRow Level Security対応していないので、個人的には今後新規開発する際にMySQLを採用することはしないと思う。。


# 課題2の回答
上記に記載済み

RLSを用いたマルチテナントアーキテクチャの実装方法について下記の資料が参考になる。実装内容次第ではRLSが適用されなくなることもあるので、RLSが確実に適用されていることの確認が重要だなと理解した。

- [PostgreSQL の行レベルのセキュリティを備えたマルチテナントデータの分離 | Amazon Web Services](https://aws.amazon.com/jp/blogs/news/multi-tenant-data-isolation-with-postgresql-row-level-security/)
- [マルチテナントSaaSのテナント分離をRow-Level Securityに移行した - Sansan Tech Blog](https://buildersbox.corp-sansan.com/entry/2021/05/10/110000)