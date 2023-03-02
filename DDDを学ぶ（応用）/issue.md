# DDD を学ぶ（応用）

## 課題 1（SOLID）

> フロントエンドから送られてきた token などを見て、isLoggedIn を true にするロジックはオニオンアーキテクチャで言うところの、どの層に実装するべきでしょうか？

- アクセス制御ロジックはロジックはプレゼンテーション層に実装するべき
- 入口の時点で API にアクセスできるかを制御するのが最も処理コストが低いと考える
- NestJS の場合の実装イメージ。AuthGuard は、認証されたユーザーのみが保護されたルートにアクセスできるようにする。

```
@Controller()
export class AppController {
  constructor(private userUsecase: UserUsecase) {}

  @Get('users')
  @UseGuards(AuthGuard)
  async findAllUsers(): Promise<User[]> {
    return await this.userService.findAll();
  }
}
```

> User クラスに「isLoggedIn」という属性が定義されているのをみた別のエンジニアが、「emailAddress」や「firebaseUserId」など、認証に関わるような属性を追加する PR を提出した場合は問題か？

- 「User」クラスは認証に使う情報、その他のプロファイル情報などで肥大化するので問題
- ドメイン層の User クラスと、認証結果の情報を保持するクラスは分けたい

> 複数の集約を跨いで整合性を担保したいケースにどう対応するか？

- ビジネス的に結果整合性で問題ないならトランザクションを貼らない
- RDB 以外にも NoSQL やキャッシュなどのデータストアを用いる場合はトランザクションを貼ることができないので、結果整合性で問題ないように実装する
- トランザクションを用いた強い整合性を担保したい場合
  - ドメインサービスで複数の集約を跨いでトランザクションを貼る
  - ユースケースからドメインサービスを呼び出す
- 結果整合性で問題ないとする場合
  - ユースケースでトランザクションを貼らない
  - すべての更新が完了すれば結果的に正しい状態に収束するようにしておく

> 文字数の上限を超えた際にエラーを throw することに関して、どのような問題が起き得ると思いますか？

- constructor でエラーを throw するとすでに 1000 文字以上で登録されている記事を取得しようとしたときにエラーになってしまう。回避するにはバリデーションをかけていない再構成メソッドを用意する必要がある。
- エラーがスローされる可能性がある場所で、適切な try-catch ブロックが実装されていない場合、エラーがスローされた場合にアプリケーションがクラッシュする可能性がある
- エラーを throw する代わりに、関数の戻り値にエラー型のオブジェクトを返す設計をすることもできる。この場合、呼び出し元でエラーの有無をチェックし、適切に処理する必要がある。

```
class StringLengthExceededError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'StringLengthExceededError';
  }
}

function calculateSum(numbers: string): number | StringLengthExceededError {
  if (numbers.length > 100) {
    return new StringLengthExceededError(
      'Input string length exceeds the limit of 100 characters',
    );
  }

  const numberArray = numbers.split(',').map(Number);
  return numberArray.reduce((a, b) => a + b, 0);
}

const result = calculateSum('1,2,3,4,5');
if (result instanceof StringLengthExceededError) {
  console.log(result.message);
} else {
  console.log(result);
}
```

- Rust では、Result 型を使用して、エラーのハンドリングを行うことができて、関数の戻り値に成功か失敗かを示す値を返す。Result 型を使えば、ドメインオブジェクトを使用する側が不適切な値になった場合の対応を忘れることなく、どのようにハンドリングするか決めることができる。

```
type Result<T, E> = { success: true; value: T } | { success: false; error: E };

class StringLengthExceededError {
  constructor(public message: string) {}
}

function calculateSum(
  numbers: string,
): Result<number, StringLengthExceededError> {
  if (numbers.length > 100) {
    return { success: false, error: new StringLengthExceededError('Input string length exceeds the limit of 100 characters') };
  }

  const numberArray = numbers.split(',').map(Number);
  return { success: true, value: numberArray.reduce((a, b) => a + b, 0) };
}

const result = calculateSum('1,2,3,4,5');
if (result.success) {
  console.log(result.value);
} else {
  console.log(result.error.message);
}
```

- Java や C#などの言語では、「検査例外」「非検査例外」と呼ばれる概念があ流。検査例外は、呼び出し元で必ずキャッチする必要がある例外であり、非検査例外は、呼び出し元でキャッチする必要がない例外。
- 今回の場合は、文字数の上限を超えたことを上位のモジュールで知る必要がないため、非検査例外を使用するのが適切。

任意課題

- ドメインイベントについて調べてみた。イベントソーシングは、データの変更を全てログに残すことで、データの追跡性や監査性を高めることができるらしい。また、アグリゲートという概念を用いることで、ドメインの関連性を表現することができ、システム全体の設計を改善することができるとのこと。store に状態が保持されていて、イベントによって変わっていく流れは、なんとなく Flux に似ている気がする。データの変更をログに残せるというのが良い。
