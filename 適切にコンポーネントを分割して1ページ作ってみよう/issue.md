# 基本的な設計原則

## 課題 1

### アトミックデザインとは

- 堅牢なデザインシステムを構築し、維持するために考えられた手法
- インターフェイス デザイン システムを作成するために連携する 5 つの異なる段階で構成される
- Atoms,Molecules,Organisms,Templates,Pages の 5 つの段階で構成される
- アトミック デザインはユーザー インターフェイスをまとまった全体であると同時に部品の集合であると考えるのに役立つメンタル モデル
- https://atomicdesign.bradfrost.com/
- [Atomic Design ~堅牢で使いやすい UI を効率良く設計する](https://www.amazon.co.jp/Atomic-Design-%E5%A0%85%E7%89%A2%E3%81%A7%E4%BD%BF%E3%81%84%E3%82%84%E3%81%99%E3%81%84UI%E3%82%92%E5%8A%B9%E7%8E%87%E8%89%AF%E3%81%8F%E8%A8%AD%E8%A8%88%E3%81%99%E3%82%8B-%E4%BA%94%E8%97%A4-%E4%BD%91%E5%85%B8/dp/477419705X)

### アトミックデザインの各要素

Atoms

- それ以上 UI としての機能性を破壊しない最小要素
- プラットフォームのデフォルト UI
- プラットフォームのデファクトスタンダードな UI
- レイアウトパターン
- セマンティックなデザイン要素

Molecules

- atoms を複数組み合わせて構成される
- ユーザーの具体的な動機に応える機能の単位
- 他のコンポーネントの機能を助けるヘルパーとしての存在意義が強い

Organism

- 独立して存在できるコンポーネント
- Organisms は Organisms のコンポーネントで構成されることもある

Templates

- コンポーネントがページ上で正しくレイアウトされるかを確認することが目的
- 雛形なので具体的なコンテンツを持ちませんが、Organisms 層や Molecules 層、Atoms 層などのコンポーネントを実際のサービスのページと同様に配置
- Page と別に作っておくことで、コンテンツに依存することなくレイアウトのテストを実施できる

Pages

- Template 層のコンポーネントに実際のコンテンツを流し込んだものです。つまり、ユーザーが実際に触れるプロダクトの UI そのもの

### 「function component（関数コンポーネント）」と「class component（クラスコンポーネント）」の違い

ClassComponent

- 組み込みの Component クラスを拡張し、render メソッドを実装することでコンポーネントを作成する
- ライフサイクルに応じたメソッドが存在する。
- 公式サイトではクラスコンポーネントの代わりにファンクションコンポーネントを使用することが推奨されている。
- https://react.dev/reference/react/Component

functionComponent

- 関数として定義されるコンポーネント。
- hooks と呼ばれる機能を使用することで、クラスコンポーネントと同様の機能を実現できる。
- hooks の useEffect を使用することで機能的凝集度を高めることができる
- https://fortee.jp/object-oriented-conference-2020/proposal/a826b6c6-167c-4c5c-bfc7-52bb8bc22ec1

実装コード

- https://codesandbox.io/s/magical-wind-sweh2h?file=/src/App.js

参考情報

- https://react.dev/reference/react/PureComponent#migrating-from-a-purecomponent-class-component-to-a-function

## 課題 2

### https://demo.vercel.store/ の模写
