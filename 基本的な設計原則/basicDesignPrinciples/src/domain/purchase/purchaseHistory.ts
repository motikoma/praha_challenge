export class PurchaseHistory {
    constructor(
        private readonly _userId: string,
        private readonly _productId: string,
        private readonly _purchaseDate: Date,
        private readonly _purchaseNumber: number,
    ) {
        this._userId = _userId;
        this._productId = _productId;
        this._purchaseDate = _purchaseDate;
        this._purchaseNumber = _purchaseNumber;
    }

    get userId(): string {
        return this._userId;
    }
    get productId(): string{
        return this._productId;
    }
    get purchaseDate(): Date {
        return this._purchaseDate;
    }
    get purchaseNumber(): number {
        return this._purchaseNumber;
    }
}

export class PurchaseHistories{
    constructor(private readonly purchaseHistories: PurchaseHistory[]) {
        this.purchaseHistories = purchaseHistories;
    }

    getPurchaseHistories(): PurchaseHistory[] {
        return this.purchaseHistories;
    }
}