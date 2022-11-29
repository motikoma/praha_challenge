import { ValueObject } from "./valueObject";

interface HumanProps {
    id: string;
    name: string;
}

class Human3 extends ValueObject<HumanProps>{
    private constructor(props: HumanProps){
        super(props);
    }

    public static create(props: HumanProps): Human3 {
        return new Human3(props);
    }
}

/**
 * ドメイン知識が漏れている
 * 
 * バリューオブジェクトにビジネスロジックが書かれていない
 * ユースケースにビジネスロジックが漏れている
 */
class postHumanUseCase {
    public createHuman(id: string, name: string): Human3 {
        if(name === '') throw new Error('名前が空です');
        if(name.length > 10) throw new Error('名前が長すぎます');
        return Human3.create({id, name});
    }

    public updateHuman(id: string, name: string) {
        if(name === '') throw new Error('名前が空です');
        if(name.length > 10) throw new Error('名前が長すぎます');
        const human = Human3.create({id, name});

        // const repository = new HumanRepository();
        // repository.update(human);
    }
}