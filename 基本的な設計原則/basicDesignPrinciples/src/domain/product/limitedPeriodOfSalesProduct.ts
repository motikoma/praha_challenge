export class LimitedPeriodOfSalesProduct {

    _id: string;
    _name: string;
    _limitedNumber: number;
    _limitedYear: number;

    constructor(
        _id: string,
        _name: string,
        _limitedNumber : number,
        _limitedYear : number,
    ) {
        this._id = _id;
        this._name = _name;
        this._limitedNumber = _limitedNumber;
        this._limitedYear = _limitedYear;
    }

    get id(): string {
        return this._id;
    }
    get name(): string {
        return this._name;
    }
    get limitedNumber(): number {
        return this._limitedNumber;
    }
    get limitedYear(): number {
        return this._limitedYear;
    }
}