# 課題 1（実装）

## 常連顧客を特定

1996 年に 3 回以上注文した（Orders が 3 つ以上紐づいている）Customer の ID と、注文回数を取得

```
SELECT Orders.CustomerID, count(Orders.CustomerID) FROM Orders
left join Customers
on Orders.CustomerID = Customers.CustomerID
where OrderDate >= "1996-01-01" and OrderDate < "1997-01-01"
group by Orders.CustomerID
having count(Orders.CustomerID) >= 3
```

## 最もよく注文してくれたのは、どの Customer でしょうか？

- CustomerID が 65,63,20 の顧客

```
SELECT Orders.CustomerID, count(Orders.CustomerID) FROM Orders
left join Customers
on Orders.CustomerID = Customers.CustomerID
where OrderDate >= "1996-01-01" and OrderDate < "1997-01-01"
group by Orders.CustomerID
order by count(Orders.CustomerID) desc
```

## 過去最も多くの OrderDetail が紐づいた Order を取得

```
SELECT OrderID, Count(OrderDetailID) AS OrderDetailCount
FROM OrderDetails
GROUP BY OrderID
having OrderDetailCount = (
	select Max(OrderDetailCount)
    from (
    	select OrderID, count(OrderID) as OrderDetailCount
        from OrderDetails
        group by OrderID
    )
)
```

## Order 数が多い順番に Shipper の id を並べてください。Order 数も表示してください

```
select Shippers.ShipperID, Shippers.ShipperName, count(Orders.OrderID) as OrderCount from Shippers
left join Orders
on Shippers.ShipperID = Orders.ShipperID
group by Shippers.ShipperID
order by OrderCount desc
```

## 売上が高い順番に Country を並べてください。売上も表示してください

```
SELECT Country, round(sum(OrderDetails.Quantity * Products.Price)) as sales FROM Orders
left join OrderDetails
on Orders.OrderID = OrderDetails.OrderID
left join Products
on OrderDetails.ProductID = Products.ProductID
left join Customers
on Orders.CustomerID = Customers.CustomerID
group by Customers.Country
order by sales desc
```

## 国ごとの売上を年毎に（1 月 1 日~12 月 31 日の間隔で）集計してください

```
SELECT Country, strftime('%Y', OrderDate) AS year_only, sum(round(OrderDetails.Quantity * Products.Price)) as sales FROM Orders
left join OrderDetails
on Orders.OrderID = OrderDetails.OrderID
left join Products
on OrderDetails.ProductID = Products.ProductID
left join Customers
on Orders.CustomerID = Customers.CustomerID
group by Country, year_only
```

## Employee テーブルに「Junior（若手）」カラム（boolean）を追加

```
ALTER TABLE Employees add column Junior;

update Employees
set Junior = true
where strftime('%Y', BirthDate) > '1960'
```

## Shipper に long_relation カラム（boolean）を追加

```
alter table Shippers add column long_relation Boolean default false;

update shippers
set long_relation = true
where ShipperID IN (
	select ShipperID
    from (
    	SELECT Shippers.ShipperID, count(Orders.OrderID) as OrderCount
        FROM Shippers
        LEFT JOIN Orders ON Shippers.ShipperID = Orders.ShipperID
        GROUP BY Shippers.ShipperID
        HAVING OrderCount >= 70
    ) as t1
);
```

## それぞれの Employee が最後に担当した Order と、その日付

```
select OrderID, EmployeeID, max(OrderDate) from Orders
group by EmployeeID;
```

## NULL の扱いに慣れる

```
update Customers
set CustomerName = null
where CustomerID = 1;

// CustomerNameが存在するユーザを取得するクエリ
select * from Customers
where CustomerName is not null;

// CustomerNameが存在しない（NULLの）ユーザを取得するクエリ
select * from Customers
where CustomerName is null;

SQLでは、比較演算子「=」を使用してNULLを比較することはできない。NULLとの比較は、IS NULLまたはIS NOT NULL演算子を使用する必要がある。比較演算子「=」を使用してNULLを比較すると、NULL自体が値を持っていないため、真偽値が確定できないため。
```

## JOIN の扱いになれる

```
Delete from Employees where EmployeeID = 1;

// EmloyeeId=1が担当したOrdersを表示しないクエリ
select * from Orders
inner join Employees
on Orders.EmployeeID = Employees.EmployeeID

// EmloyeeId=1が担当したOrdersを表示する（Employeesに関する情報はNULLで埋まる）クエリ
select * from Orders
left join Employees
on Orders.EmployeeID = Employees.EmployeeID
where Orders.EmployeeID = 1
```

# 課題 2(質問)

## Where と Having の違いは何でしょうか？

### Where 句

- WHERE 句は、GROUP BY 句でグループ化される前にフィルタリングするために使用される。
- つまり、WHERE 句はグループ化の前に行われる絞り込み
- WHERE 句は、グループ化に関係するカラムに基づいてフィルタリングすることはできない。
- WHERE 句は、グループ化される前に行われるため、グループ化された後に使用される集約関数に関係する条件は WHERE 句では指定で
  きない。

### Having 句

- HAVING 句は、グループ化された後にフィルタリングするために使用される。
- つまり、HAVING 句はグループ化された後に行われる絞り込み
- HAVING 句は、グループ化に関係するカラムに基づいてフィルタリングすることができる。
- HAVING 句は、グループ化された後に使用される集約関数に関係する条件を指定することができる。

## DDL、DML、DCL、TCL

### DDL

- DDL は、データ定義言語（Data Definition Language）の略称で、データベースオブジェクトの作成、変更、削除など、データベースのスキーマを定義するための言語
- DDL には、CREATE、ALTER、DROP などの文がある

### DML

- DML は、データ操作言語（Data Manipulation Language）の略称で、データベースのテーブルの操作、データの挿入、更新、削除など、データベース内のデータの操作を行うための言語
- DML には、SELECT、INSERT、UPDATE、DELETE などの文がある

### DCL

- DCL は、データ制御言語（Data Control Language）の略称で、データベースのセキュリティやアクセス権限を管理するための言語
- DCL には、GRANT、REVOKE などの文がある

### TCL

- TCL は、トランザクション制御言語（Transaction Control Language）の略称で、トランザクションの制御や操作の確定、取り消しなどを行うための言語
- TCL には、COMMIT、ROLLBACK、SAVEPOINT などの文がある

# 課題 3(クイズ)

- Brazil の category ごとの売上を年毎に（1 月 1 日~12 月 31 日の間隔で）集計してください
