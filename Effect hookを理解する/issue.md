# 課題 1

useEffect の cleanup 処理が必要な理由

- useEffect フックの cleanup 処理が必要な理由は、コンポーネントがアンマウント（削除）された際に副作用のクリーンアップを行うため
- 副作用は、API リクエストのキャンセル、イベントリスナーの解除、タイマーの停止など、リソースの解放やメモリリークの防止などに関連する操作
- Axios には API リクエストのキャンセルする機構が備わっている：https://www.suzu6.net/posts/315-axios-request-cancel/

useEffect の第 2 引数に何も指定しなかった場合の挙動

- 初回のレンダリング時およびコンポーネントが更新されるたびに実行される

空の配列（[]）を指定した場合の挙動

- 初回レンダリング時のみ実行される

# 課題 2

カウンターを useState で作成してレンダリングの度に useEffect から更新するようにすると、無限ループになる理由

- useEffect 内で setCount を呼び出すことによってコンポーネントが再レンダリングされ、再度 useEffect が実行されるため。

解決策

https://codesandbox.io/s/use-effect-demo-forked-ukl97k

- useRef フックを使用すると、current プロパティに格納された値は常に最新の値を示し、コンポーネントの再レンダリング時にも値が保持される
- コンポーネント内で可変な値を保持する場合に便利

# 課題 3

fetch-component の実装
https://codesandbox.io/s/use-effect-demo-forked-ukl97k?file=/src/fetch-component.js

# 課題 4

下記のコードは検索のリアルタイム入力のコードの一部です。
問題点について指摘してください。
ヒント：https://zenn.dev/fujiyama/articles/c26acc641c4e30

```


function SearchResults({ query }) {
const [results, setResults] = useState([]);
const [page, setPage] = useState(1);

useEffect(() => {
    fetchResults(query, page).then(json => {
    setResults(json);
});
}, [query, page]);

function handleNextPageClick() {
    setPage(page + 1);
}
// ...
}

```
