export class NoLimitedProduct implements Product {

    id: string;
    name: string;
    
    constructor(
        id: string,
        name: string,
    ) {
        this.id = id;
        this.name = name;
    }
}