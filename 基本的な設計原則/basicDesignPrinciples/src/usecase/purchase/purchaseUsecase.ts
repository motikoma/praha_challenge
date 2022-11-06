import { LimitedPeriodOfSalesProduct } from "#/domain/product/limitedPeriodOfSalesProduct";
import { Purchase } from "#/domain/purchase/purchase";
import { PurchaseRepository } from "#/domain/purchase/purchaseRepository";
import { ProductService } from "#/service/product/productService";

export class PurchaseUsecase {
  constructor(private readonly purchaseRepository: PurchaseRepository) {}

  purchase(purchaseParam: PurchaseParam): Product {

    // 商品idを元にデータベースの特定のカラム情報がenableかどうかで生成するドメインモデルを出し分ける
    const product = new ProductService().getProduct(purchaseParam.productId);
    const purchase = new Purchase(purchaseParam, product);

    // 商品が購入可能かどうかを判定する
    purchase.checkPurchase()

    // 購入手続きを実行する
    const purchasedProduct = this.purchaseRepository.create(purchaseParam.userId, product);
    return purchasedProduct;
  }
}

export class PurchaseParam {
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