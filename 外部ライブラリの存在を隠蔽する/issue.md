# 外部ライブラリの存在を隠蔽する

## 課題 1

### アプローチ

- react-fook-form に依存するコードを カスタムフックスに切り出した
- Container コンポーネントと Presentational コンポーネントを分離した

### 所感

- カスタムフックスに切り出す前は register 関数を props で Container から Presentational に渡していたが、カスタムフックスに切り出したことで、register 関数を props で渡す必要がなくなった。register 関数の型を定義する際に any を使用しなくて済んだ
- ただ、Presentational コンポーネントでカスタムフックを読んでいるので、間接的には useForm に依存しているとも言える
- any を許容するか間接的な依存を許容するか悩ましい
