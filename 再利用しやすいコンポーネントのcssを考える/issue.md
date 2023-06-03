# 課題 1

下記コンポーネントが再利用しづらい理由
https://codesandbox.io/s/sad-davinci-51xe3?file=/src/styles.css

- button の色を赤色で固定にしている
- margin を指定しているため、button を配置する文脈によっては使いづらい

再利用しやすいように書き直した

- https://codesandbox.io/s/upbeat-benz-ftodvf?file=/src/styles.css
- button の色を props で受け取るようにした
- margin を button のラッパーコンポーネントに付与するようにした

# 課題 2

下記コンポーネントが再利用しづらい理由
https://codesandbox.io/s/great-margulis-ir96j?file=/src/App.js

- sideMenu,mainContents が親の App の flex に依存している

再利用しやすいように書き直した

- https://codesandbox.io/s/awesome-robinson-cnezm1?file=/src/styles.css
- sideMenu と mainContent を親の flex に依存しないように修正

# 課題 3

下記コンポーネントが再利用しづらい理由
https://codesandbox.io/s/epic-nash-2vbw4?file=/src/App.js

- MenuItem が li タグで固定されており、親の ul タグに依存しているため

# 課題 4

下記コンポーネントが再利用しづらい理由
https://codesandbox.io/s/aged-glade-6grnuk

- CustomBlueButton が CustomButton を継承しており、CustomButton の意図しない修正に影響を受けやすい

再利用しやすいように書き直した

- CustomBlueButton は 作成せずに CustomButton に color の props を渡すことで対応した
