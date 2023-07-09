# 課題 1（実装）

- .github/workflows/lint.yaml 参照
- 本課題のプルリクで GithubAction が実行されていることを確認できる

# 課題 2（実装）

別プルリクで実装予定

# 課題 3（実装）

## ビルド時間を短縮する方法

Node.js のプロジェクトでビルド時間を短縮するための一つの手法として、node_modules をキャッシュするという方法がある
毎回、npm install や yarn install を実行すると、ビルド時間が長くなる
これを解決するために、GitHub Actions はビルド間で node_modules のキャッシュを保存し再利用する機能を提供している
以下に、そのための GitHub Actions の設定例を示す。

```
steps:
- uses: actions/checkout@v2

- name: Cache node modules
  uses: actions/cache@v2
  env:
    cache-name: cache-node-modules
  with:
    # npm cache files are stored in `~/.npm` on Linux/macOS
    path: ~/.npm
    key: ${{ runner.os }}-build-${{ env.cache-name }}-${{ hashFiles('**/package-lock.json') }}
    restore-keys: |
      ${{ runner.os }}-build-${{ env.cache-name }}-
      ${{ runner.os }}-build-
      ${{ runner.os }}-

- name: Install Dependencies
  run: npm ci

- name: Build
  run: npm run build
```

上記の設定では、まず actions/cache@v2 を使用してキャッシュを設定する
上記の例では、ランナーの OS と package-lock.json のハッシュ値をキーに設定している。
package-lock.json が変更されると、新しいキャッシュが作成される。
また、キャッシュがヒットしない場合でも、restore-keys を使用して部分一致のキャッシュを探す。
これにより、package-lock.json が変更されても、一部の依存関係は再利用される。
その後、npm ci コマンドを使用して依存関係をインストールする
npm ci は package-lock.json に基づいて依存関係をインストールするため、npm install よりも高速で信頼性が高い
これにより、ビルド時間を大幅に短縮することが可能になる

## 外部から GitHub Actions のワークフローをトリガーする方法

外部から GitHub Actions のワークフローをトリガーする方法の一つとして、repository_dispatch イベントを使用することができる
repository_dispatch イベントは、外部からの Webhook によりトリガーされ、任意のイベントタイプとペイロードを指定することが可能
例えば、headless CMS の内容が更新された際に GitHub Actions のワークフローを起動するためには、以下のような手順をとることができる
GitHub Actions のワークフローファイルを作成し、repository_dispatch イベントをトリガーとして指定する。以下にその設定例を示す。

```
name: Build and Deploy on CMS Update
on:
  repository_dispatch:
    types: [cms-update]
```

上記の設定では、cms-update というタイプの repository_dispatch イベントがトリガーとなる
次に、CMS が内容を更新した際に Webhook を送信するように設定します。これは CMS の具体的な設定方法によりますが、Webhook のエンドポイントは次の形式になります。

```
https://api.github.com/repos/<OWNER>/<REPO>/dispatches
```

ここで、<OWNER>はリポジトリのオーナー名、<REPO>はリポジトリ名

Webhook のリクエストは POST メソッドで、ヘッダーには Accept: application/vnd.github.everest-preview+json と Authorization: Bearer YOUR_GITHUB_TOKEN を含める
YOUR_GITHUB_TOKEN はあなたの GitHub のトークンを指す
リクエストのボディには event_type（この例では cms-update）を指定する
任意のペイロードを送信する場合は client_payload を指定する

```
{
    "event_type": "cms-update",
    "client_payload": {
    "key1": "value1",
    "key2": "value2"
    }
}
```

この設定により、CMS の更新が行われると repository_dispatch イベントが発生し、GitHub Actions のワークフローが起動する

### 特定のディレクトリ配下が変更された時のみワークフローを実行する方法

下記のように記述することで、特定のディレクトリ配下が変更された時のみワークフローを実行することができる

```
on:
  pull_request:
    paths:
      - "CI環境を整備してみよう/**"
```

### 特定の job が他の job の完了を待ってから 実行されるように設定する方法

GitHub Actions では、ワークフロー内の特定のジョブが他のジョブの完了を待つように設定するために、needs キーワードを使用する
needs キーワードの後には、そのジョブが依存するジョブの名前を指定する

```
jobs:
  job1:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v2
      - name: Run a script
        run: echo "This is job 1"

  job2:
    needs: job1
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v2
      - name: Run a script
        run: echo "This is job 2, it runs after job 1"
```

複数のジョブを指定することも可能。例えば、job3 が job1 と job2 の両方の完了を待つようにするには、次のように設定する

```
jobs:
  job1:
    runs-on: ubuntu-latest
    steps:
      - name: Run a script
        run: echo "This is job 1"

  job2:
    runs-on: ubuntu-latest
    steps:
      - name: Run a script
        run: echo "This is job 2"

  job3:
    needs: [job1, job2]
    runs-on: ubuntu-latest
    steps:
      - name: Run a script
        run: echo "This is job 3, it runs after job 1 and job 2"
```

### 秘匿性の高い環境変数を yml ファイルの中で扱う方法

GitHub Actions では、秘密の値（秘密鍵、アクセストークン、パスワードなど）を安全に管理するために、秘密 (secrets) を使う
これは、リポジトリまたは組織レベルで設定でき、ワークフローファイル内では秘密の名前で参照できる
秘密はリポジトリの設定ページから設定できる。以下の手順で設定できる。
ワークフローファイル内で秘密を参照するには、secrets コンテキストを使用する

```
jobs:
  my_job:
    runs-on: ubuntu-latest
    steps:
      - name: Use secret
        run: echo "My secret is ${{ secrets.MY_SECRET }}"
        env:
          MY_SECRET: ${{ secrets.MY_SECRET }}

```
