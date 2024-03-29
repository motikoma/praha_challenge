# スロークエリを理解する

## 課題1（実装）
スロークエリログを有効
```
SET GLOBAL slow_query_log = 'ON';
SHOW variables LIKE 'slow_query_log%';
```

実行に0.1秒以上かかったクエリをスロークエリログに記録するように設定
```
SET GLOBAL long_query_time = 0.1;
SHOW variables LIKE 'long_query_time%';
```

実行時間が0.1秒より長いクエリを3つ実行して、スロークエリログに記録される事を確認してください
```
SELECT title, COUNT(1)
FROM employees.employees emp
INNER JOIN employees.titles titles
ON emp.emp_no = titles.emp_no
AND emp.hire_date >= titles.from_date
AND emp.hire_date <= titles.to_date
GROUP BY title
ORDER BY COUNT(1) DESC;
```

```
SELECT * from employees e
left join dept_emp de
on e.emp_no = de.emp_no;
```

```
SELECT DISTINCT title FROM employees.titles ORDER BY title;
```

# 課題２(実装)
最も頻度高くスロークエリに現れるクエリ
このコマンドは、実行回数が多い順（-s r）で上位1件（-t 1）のスロークエリを表示します。
```
mysqldumpslow -s r -t 1 /path/to/slow-query.log
```

実行時間が最も長いクエリ
このコマンドは、実行時間が長い順（-s t）で上位1件（-t 1）のスロークエリを表示します。
```
mysqldumpslow -s t -t 1 /path/to/slow-query.log
```

ロック時間が最も長いクエリ
このコマンドは、ロック時間が長い順（-s l）で上位1件（-t 1）のスロークエリを表示します。
```
mysqldumpslow -s l -t 1 /path/to/slow-query.log
```

# 課題３(実装)
indexを使ってうまく高速化できず...

# 課題４（質問）
### LIMIT 1って書いたのにめちゃくちゃ遅いクエリ
- 取得するデータが1件であっても、データベースのテーブルに格納されている全てのデータをスキャンしてから、該当する1件を取得するために時間がかかっている可能性がある。
### JOIN時にWHEREじゃなくてONで絞った方が良い場合
- WHERE句での絞り込みは、JOINが行われた後にフィルタリングされる
- JOINで結合された全てのレコードが一度メモリにロードされ、その後でWHERE句で絞り込みが行われるため、JOINで結合されたレコードが多い場合、JOINが膨大な時間を必要とする場合がある
- 一方、JOIN ON句での絞り込みは、JOINが行われる前にフィルタリングされる。
- 絞り込み条件を使用してJOINを行うため、JOINで結合されるレコード数が減り、より高速にクエリを実行できる可能性がある。
- LEFT OUTER JOINの場合、JOIN ON句での絞り込みを使用することで、LEFT OUTER JOINによるレコードの膨張を防止でき、クエリの実行時間を改善できる可能性がある。

# 課題5（質問）

### オフセットページネーション
- オフセットページネーションは、結果の先頭から n 個のレコードをスキップして、次の m 個のレコードを取得するという方法。これにより、例えばページ番号やページサイズを指定して、特定の範囲のデータを取得することができる。
- メリット: 任意のページに移動ができるのでページを切り替える方式のページネーションに適している。また、一意となるようなデータが不要なので、作成日などでソートする場合にも適している。
- デメリット: オフセットが大きくなるとパフォーマンスが低下する

### カーソルページネーション
- 結果セットを一度に取得するのではなく、次のページに進むときに必要なデータだけを動的に取得する方法。カーソルとは、データベースから取得された行を順に参照するためのポインタのようなもので、ページングに利用することができる。
- メリット: オフセットを使わないのでパフォーマンスが良い。無限スクロールを実装する場合はこちらの手法が良い。
- デメリット: どのページにどのデータがくるか予想ができない。一意となるデータをベースとする必要がある。

参考：https://note.com/note_fumi/n/nd5ee70a912d2 

# 課題6
n+1問題とはなんでしょうか？それを回避する方法を普段お使いのライブラリやフレームワークを踏まえて説明してください。