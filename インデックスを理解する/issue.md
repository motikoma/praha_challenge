# 課題 1（質問）

## インデックスの仕組み

- インデックスとは、データベースの中にあるデータの位置を特定するために使用される機能。データベースは膨大な量のデータを格納することができるが、これらのデータを検索するには時間がかる。インデックスを使用することで、データベースは効率的にデータを検索できるようになる。
- 例えば、電話帳には、人々の名前と電話番号が記載されてる。あなたが友達の電話番号を知りたい場合、電話帳全体を手動で探すことがで切るが、これは非常に時間がかかる作業。しかし、電話帳がアルファベット順に並べられている場合、友達の名前の最初の文字から検索を始めることができる。このように、アルファベット順に並べた電話帳は、検索がはるかに簡単になる。
- データベースでも同様に、インデックスはデータを特定の順序で格納することによって、検索を高速化することができる。たとえば、あるデータベースにおいて、顧客の情報を氏名順に格納する場合、インデックスを使用することで、顧客の氏名をキーにして、すばやく顧客の情報を検索することができる。
- ただし、インデックスを使用する場合には、データベースの更新処理やデータの追加に多少のコストがかかることがある。これは、インデックスを更新する必要があるため。

## インデックスを貼る際に slow query log を調べる必要がある理由

- インデックスを貼る際に slow query log を調べる必要がある理由は、インデックスを貼ることでクエリのパフォーマンスが向上する場合もあれば、逆にパフォーマンスが悪化する場合もあるため
- インデックスを使って検索することで、データベースがテーブル全体をスキャンする必要がなくなり、クエリの実行時間が短縮される場合がある。しかし、インデックスが適切に設定されていない場合、クエリの実行時間がむしろ長くなってしまう場合がある。例えばクエリに使用されないカラムにインデックスが貼られていた場合、余分なデータを読み込んでしまう。
- slow query log は、クエリの実行時間が長い場合にログを出力する機能であり、インデックスを貼る前と貼った後で実行時間がどのように変化したかを確認するために利用される。slow query log を調べることで、インデックスの設定方法を適切に調整し、クエリのパフォーマンスを改善することができる。
- インデックスを作成すると、INSERT、UPDATE、DELETE の際にインデックスを変更するコストが増える

## カーディナリティとは

- カーディナリティとは、あるカラムに含まれるユニークな値の数のこと
- あるカラムに重複した値が多く含まれている場合、カーディナリティは低くなる。

## カバリングインデックスとは

- カバリングインデックス（Covering Index）は、インデックスを使ってクエリの結果を返す際、実際のデータを参照する必要がないようにするための仕組み
- 通常、クエリによるデータの検索は、まずインデックスを使って該当する行を見つけ、その行の実際のデータを参照して、必要な情報を取得することで行われる
- しかし、カバリングインデックスを使用すると、インデックスに必要な情報が全て含まれているため、実際のデータを参照する必要がなくなる
- つまり、カバリングインデックスを使用することで、データベースはインデックスだけを参照してクエリの結果を返すことができ、データベースへのアクセス回数を減らすことができる。
- これにより、クエリの処理速度を大幅に高速化することができる
- ただし、カバリングインデックスを使用するためには、インデックスに必要な情報が全て含まれている必要がある。
- また、不要なメモリを確保したり、update 文実行時のメンテナンス コストが増えたりするため、実際には where 句などを優先し、select 句を考えずにインデックスを作って、必要があればそこから拡張していくべき

## autoincrement の id カラムを PK として扱う上ではどのようなメリット・デメリット

- 【メリット】
  - ID カラムを自動生成することで、一意の識別子を簡単に取得することができる
- 【デメリット】
  - サービスが統合される必要が出てきた場合など、ID が重複する可能性がある
  - URL に ID を含める場合、ID が連番だと推測されやすくなる
  - 永続化しないと ID が生成されないため、ドメイン駆動設計の場合アプリケーション上で ID が null の状態でインスタンスを作成する必要が出てくる
  - レコードを物理削除して、末端のレコードを出した場合、MySQL を再起動すると AUTO INCREMENT 値が残ってる最後の INCREMENT 値に変わる。関連テーブルにレコードが残っていると新規レコードができた場合に同じ ID がふられて、残っている関連テーブルのレコードが紐づく事になるというバグを生み出してしまう
    　- https://www.bravesoft.co.jp/blog/archives/10517

# 課題 2（実装）
- 元のクエリの実行時間: 878ms
- indexを貼る
  - CREATE INDEX last_name_index ON employees (last_name);
- インデックスを貼った後のクエリの実行時間: 13ms
- クエリを繰り返す場合、実行時間が短縮されていく理由
  - データベースがクエリを実行する際に、キャッシュやバッファなどの仕組みを利用して、ディスクからデータを読み込む回数を減らすため

# 課題3（実装）
実行に20秒程度かかるクエリ
```
SELECT emp.last_name, SUM(sal.salary) sum
FROM employees.employees emp
INNER JOIN employees.salaries sal
ON emp.emp_no = sal.emp_no
GROUP BY emp.last_name
HAVING sum =
(
    -- 最大値
    SELECT MAX(tmp.tmp_sum)
    FROM
    (
        -- last_nameごとのsalaryのsumを計算
        SELECT SUM(sal2.salary) tmp_sum
        FROM employees.employees emp2
        INNER JOIN employees.salaries sal2
        ON emp2.emp_no = sal2.emp_no
        GROUP BY emp2.last_name
    ) tmp
);
```

実行計画
```
id|select_type|table     |partitions|type|possible_keys     |key    |key_len|ref                  |rows   |filtered|Extra                          |
--+-----------+----------+----------+----+------------------+-------+-------+---------------------+-------+--------+-------------------------------+
 1|PRIMARY    |emp       |          |ALL |PRIMARY           |       |       |                     | 299246|   100.0|Using temporary; Using filesort|
 1|PRIMARY    |sal       |          |ref |PRIMARY,idx_salary|PRIMARY|4      |employees.emp.emp_no |      9|   100.0|                               |
 2|SUBQUERY   |<derived3>|          |ALL |                  |       |       |                     |2778295|   100.0|                               |
 3|DERIVED    |emp2      |          |ALL |PRIMARY           |       |       |                     | 299246|   100.0|Using temporary; Using filesort|
 3|DERIVED    |sal2      |          |ref |PRIMARY,idx_salary|PRIMARY|4      |employees.emp2.emp_no|      9|   100.0|                               |
```

GROUP BYで使用している条件にインデックスを作成
```
CREATE INDEX employee_lastname ON employees.employees(last_name);
```

実行計画
```
id|select_type|table     |partitions|type |possible_keys                      |key              |key_len|ref                  |rows   |filtered|Extra      |
--+-----------+----------+----------+-----+-----------------------------------+-----------------+-------+---------------------+-------+--------+-----------+
 1|PRIMARY    |emp       |          |index|PRIMARY,employee_lastname          |employee_lastname|18     |                     | 299246|   100.0|Using index|
 1|PRIMARY    |sal       |          |ref  |PRIMARY,idx_salary,employees_salary|PRIMARY          |4      |employees.emp.emp_no |      9|   100.0|           |
 2|SUBQUERY   |<derived3>|          |ALL  |                                   |                 |       |                     |2778295|   100.0|           |
 3|DERIVED    |emp2      |          |index|PRIMARY,employee_lastname          |employee_lastname|18     |                     | 299246|   100.0|Using index|
 3|DERIVED    |sal2      |          |ref  |PRIMARY,idx_salary,employees_salary|PRIMARY          |4      |employees.emp2.emp_no|      9|   100.0|           |
```

インデックスを貼った結果、実行時間が16秒程度に変わった。

### ORDER BYを絡めると高速化を達成しやすい理由
- ORDER BYを含むクエリでは、ソートするカラムにインデックスを追加することで、ソート処理を高速化することができる可能性がある
- また、WHERE句で絞り込まれるカラムも複合インデックスに含めることで、クエリの実行速度を高速化することができる可能性がある

### SHOW INDEXESした際に表示されるcardinalityが0になっている状態
- cardinality が 0 になっている状態とは、インデックスの一意な値がないことを意味する。つまりインデックスが効かない状態となる。
```
CREATE TABLE employees (
  id INT PRIMARY KEY,
  name VARCHAR(50),
  age INT
);

INSERT INTO employees (id, name, age) VALUES (1, 'Alice', 30);
INSERT INTO employees (id, name, age) VALUES (2, 'Bob', 30);
INSERT INTO employees (id, name, age) VALUES (3, 'Charlie', 30);

-- この時点で `age` 列の値がすべて 30 。`age` 列にインデックスがある場合、`cardinality` は 0 。
```

# 課題4
### 複合indexに対する説明
- 複合インデックスは、データベースで複数の列を1つのインデックスに組み合わせたもの。これを理解するために、本を並べた本棚を例にしてみましょう。
- 本棚にはたくさんの本があり、それぞれ著者とジャンルが異なります。本を探すために、まず著者で並べ、次にジャンルで並べると、探しやすくなりますね。これが複合インデックスの基本的な考え方です。
- この場合、著者とジャンルがインデックスの列になります。
- データベースでは、複合インデックスを使用すると、2つ以上の列を組み合わせてデータの検索やソートを効率的に行うことができます。例えば、first_nameとlast_nameの2つの列に対して複合インデッ-クスを作成すると、両方の列を使用したクエリが高速になります。
- ただし、複合インデックスには順序があります。上の例では、最初にfirst_name、次にlast_nameが並びます。この順序によって、どのようなクエリが最適化されるかが決まります。例えば、first_nameだけを使ったクエリは高速化されますが、last_nameだけを使ったクエリは最適化されません。
- 複合インデックスを使用する際は、よく使う列の組み合わせや順序に注意して作成し、データベースのパフォーマンスを向上させることができます。

### 姓名を合わせた検索、あるいは姓だけの検索が多い場合のインデックス
- 下記ではfirst_nameだけで検索する際にindexは効くが、last_nameだけで検索する際にはindexが効かない。
  - CREATE INDEX employees_name ON employees (first_name, last_name)
- last_nameだけで検索する際にindexが効くようにするには、下記のようにインデックスを作成する。
  - CREATE INDEX employees_name ON employees (last_name, first_name)
