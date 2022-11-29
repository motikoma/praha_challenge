import { ValueObject } from "./valueObject";

interface HumanProps {
    id: string;
    bloodType: number;
    birthDate: Date;
    name: string;
}

class Human extends ValueObject<HumanProps>{
    private constructor(props: HumanProps){
        super(props);
    }

    public static create(props: HumanProps): Human {
        return new Human(props);
    }
}