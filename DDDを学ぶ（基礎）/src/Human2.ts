import { ValueObject } from "./valueObject";

interface HumanProps {
    id: Id;
    bloodType: BloodType;
    birthDate: BirthDate;
    name: Name;
}

class Human2 extends ValueObject<HumanProps>{
    private constructor(props: HumanProps){
        super(props);
    }

    public static create(props: HumanProps): Human2 {
        return new Human2(props);
    }
}
class Id {
    private readonly _value: string;
    constructor(value: string){
        if(!value.match(/^[0-9a-zA-Z]+$/)){
            throw new Error('IDには半角英数字のみ使用できます');
        }
        this._value = value;
    }

    get value(): string {
        return this.value;
    }
}

class BloodType {
    private readonly _value: string;
    constructor(value: string){
        if(!value.match(/^(A|B|O|AB)$/)){
            throw new Error('血液型にはA, B, O, ABのいずれかを指定してください');
        }
        this._value = value;
    }
    get value(): string {
        return this._value;
    }
}

class BirthDate {
    private readonly _value: Date;
    constructor(value: Date){
        // 20歳未満であればエラー
        if(value.getFullYear() > new Date().getFullYear() - 20){
            throw new Error('20歳未満の人は登録できません');
        }
        this._value = value;
    }

    get value(): Date {
        return this._value;
    }
}

class Name {
    private readonly _value: string;
    constructor(value: string){
        if(!(value.length < 20)){
            throw new Error('名前は20文字未満で入力してください');
        }
        this._value = value;
    }

    get value(): string {
        return this._value;
    }
}

const humanInstance = Human2.create({
    id: new Id("1"),
    bloodType: new BloodType("A"),
    birthDate: new BirthDate(new Date("2000-01-01")),
    name: new Name("Taro")  
});

console.log(humanInstance.props.birthDate.value.getFullYear());