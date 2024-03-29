# スナップショットテストを書こう

## 課題1
スナップショットテストとは
* 特定の入力に対してコンポーネントの「既知の良好な」出力をスクリーンショットや jsonとして記録し、出力が変化したコンポーネントを特定できるようにするテスト手法

スナップショットテストで予防できる不具合
* 描画時のエラー
* コンポーネントに対する予期せぬ変更
* 出力結果のエラー
    * https://www.mizdra.net/entry/2021/02/04/003728 

スナップショットテストで防止できない不具合
* ユーザーの操作を伴う機能の不具合
* nullやundefinedが引数として渡ってきた時の不具合
* インラインスタイルでcssを記載していない場合は見た目の影響を検知できない

## 課題2
praha_challenge_snapshot参照
※ storybookの不具合でsrcディレクトリが二重構造になっている。解決できず一旦そのまま。

## 課題3
* スナップショットテストをインラインで出力する方法について調べてください。外部ファイルとして出力する場合と比較して、どちらの方を採用したいでしょうか？
* 参考：https://jestjs.io/ja/docs/snapshot-testing 

## 任意課題に対する個人的な考え
フロントエンドコンポーネントの単体テストについて
* コンポーネントは変更する機会が多く、単体テストを書いても運用時の修正コストが高い。よって基本的には書かない。
* https://storybook.js.org/tutorials/intro-to-storybook/react/ja/composite-component/ 
```
プロジェクトが成熟し、Task の実装が変わっていく (たとえば、別のクラス名に変更されたり、input 要素ではなく textarea に変更されたりする) と、テストが失敗し、更新が必要となる可能性があります。これは必ずしも問題とならないかもしれませんが、UI の単体テストを使用する際の注意点です。UI の単体テストはメンテナンスが難しいのです。可能な限り手動のテストや、スナップショットテスト、視覚的なリグレッションテスト (テストの章を参照してください) に頼るようにしてください。
```

Styled-Componentsを使ったスナップショットテストについて
* Styled-ComponentsなどのCSS in JSライブラリは採用したい
* ただ、jest-styled-components は使用してもそんなに意味を感じない
    * cssの差分を可視化してもそれがどのように見えるかについては実際にStorybookで影響があったコンポーネントの見た目をチェックする必要がある
    * 結局、コンポーネントの見た目を確認するなら手間が減っていない