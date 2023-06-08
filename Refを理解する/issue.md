# 課題 1

## Performance API を使った特定の処理が完了するまでにかかる時間を測定する関数を作成

https://codesandbox.io/s/silly-sanne-v6j1hv?file=/src/measurePerformance.ts

## 任意のライブラリのメソッドの実行時間を測定して比較

day.js と moment.js の両方で日付をフォーマットする処理を 1000 回実行し、そのパフォーマンス（ミリ秒）を計測
https://codesandbox.io/s/silly-sanne-v6j1hv?file=/src/App.tsx

```
dayjs: 2.899999976158142
moment: 3.100000023841858
```

## コンポーネントが 1000 回レンダリングされるまでに要した時間を測定する

### オリジナル

https://codesandbox.io/s/konponentoga1000hui-rendaringusarerumadeniyao-sitashi-jian-woce-ding-suru-entv2d

### Profiler コンポーネントを使用した

- 課題では useEffect を使用するとのことだったが、使用せずに対応できた
  https://codesandbox.io/s/profilerkonponento-brvi5r

# 課題 3

useRef は主に以下の 2 つの用途で使用される

### DOM 要素への参照を保持する

- useRef は DOM 要素への直接的な参照を保持するの使える
- 例えば、フォーカスを設定する、テキスト入力の値を取得する、または直接的なスタイル変更を行うことが可能

### レンダリング間で値を保持する

- useRef はコンポーネントの異なるレンダリング間で値を保持するのに使用することができる
- useState フックとは異なり、useRef の値を変更しても新たなレンダリングを引き起こさないという特性があるため
- 例えば、タイマーやインターバルの ID を保持する場合、または外部からのコールバック関数内で最新の state や props を参照する場合などに有用

インターバル ID を保持する場合のサンプルコード

```
import React, { useEffect, useRef } from 'react';

function Example() {
  const intervalId = useRef();

  useEffect(() => {
    intervalId.current = setInterval(() => {
      console.log('This will run every second!');
    }, 1000);

    return () => {
      // コンポーネントがアンマウントされるときに setInterval をクリアする
      clearInterval(intervalId.current);
    };
  }, []); // 空の依存配列を指定して、エフェクトがマウントとアンマウント時にのみ実行されるようにする

  return <h1>Hello, world!</h1>;
}

export default Example;
```

# 任意課題

## なぜ Profiler API が廃止されたのか？

### 該当プルリク

https://github.com/facebook/react/pull/18417

### 不正確なタイミング

- もともと追加したときは、React 固有の知識を持ったプロファイリングツールがなかった。
- 残念ながら、User Timings API はもともと「ページの読み込み」のようなケースを想定して設計されており、何千ものコンポーネントをマークするためのものではない。そのため、多くのオーバーヘッドを追加することになる。
- ホットパスでは、User Timing API の呼び出し自体がレンダリング時間の 30％以上を占めているケースも見受けられる
- つまり、測定値が歪んでいて、誤解を招くことが多い
- しかも、DEV モードでしか取得できないので、さらに悪化する
- これを解決するために、React Profiler と特別なプロファイリング・ブイドルを導入し、より正確なタイミングを得ることができるようになった

### 不十分なプログラマティック API

- オープンソースコミュニティでも Facebook 内部でも、パフォーマンスマーカーからデータを解析しようとする非常に複雑なコードを見かけたが、文字列からメタデータを解析する必要があるため、壊れやすい
- 代替案として、<React.Profiler>コンポーネントを追加し、プログラム的に測定値を収集できるようにした

### バグとメンテナンスの負担

- サポートすることで、大きなメンテナンス負担が発生した
- API のサポートはかなりバグが多く、そのバグを修正するのは非常に困難
- そのため、たとえば React のメモリ使用量を改善して高速化するようなリファクタリングが妨げられている
