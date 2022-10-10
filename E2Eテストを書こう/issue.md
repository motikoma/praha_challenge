# E2Eテストを書こう

## 課題1
praha_challenge_e2e参照

カスタム属性を追加する必要
* タグ、クラス、またはIDによって要素を操作することは、非常に不安定であり、変更の可能性が高い
    * 要素を入れ替えたり、CSSをリファクタリングしてIDを更新したり、要素のスタイルに影響するクラスを追加または削除したりすることがある
* カスタムデータ属性を使用すれば下記のメリットが得られる
    * テストにのみ使用されるターゲットセレクタを得ることができる
    * 要素がE2Eテストで使用されることを明示できる

Container/PresentationalパターンはロジックとUIを分けて実装することで関心の分離を図るフロントエンドのデザインパターン
* Presentational Component
    * UIの描画に関心を持つコンポーネント
    * Propsで受け取ったデータをどのように表示するかのみを役割として持つ
    * 該当コンポーネント内に閉じたUIに関する状態であれば持つこともある
* Container Component
    * ロジックに関心を持つコンポーネント
    * APIや状態管理ライブラリから取得したデータをそれぞれのPresentational Componentに渡す
    * Container Componentで使用するPresentational Component以外で独自で要素をレンダリングすることはなくスタイルを持つこともない

hooksによるContainer/Presentationalパターンの置き換えについて
* コンポーネントの再利用性やテストの容易性を考えるとhooksとContainer/Presentationalパターンを組み合わせた方が良い
    * hooksにロジックを抽出したとしてもhooksを呼び出しているコンポーネントがhooksに依存する
* hooksを呼び出すコンポーネントをContainerコンポーネントとして扱う

参考
* https://zenn.dev/kazu777/articles/9460c75b7cd8d1


## 課題2
