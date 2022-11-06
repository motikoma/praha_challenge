// purchaseController.ts

import { PurchaseParam, PurchaseUsecase } from "#/usecase/purchase/purchaseUsecase";

// ルーティングは省略
class PurchaseController{
    constructor(private purchaseService: PurchaseUsecase) {}

    post(purchaseRequest: PurchaseRequest) {

        // リクエストのバリデーションは省略
        const purchaseParams = new PurchaseParam(purchaseRequest.userId, purchaseRequest.productId);

        // レスポンスの生成は省略
        this.purchaseService.purchase(purchaseParams);
    }
}

class PurchaseRequest {
    constructor(
        private readonly _userId: string,
        private readonly _productId: string,
    ) {
        this._userId = _userId;
        this._productId = _productId;
    }

    get userId(): string {
        return this._userId;
    }
    get productId(): string{
        return this._productId;
    };
}