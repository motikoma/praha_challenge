import { PurchaseService } from "#/service/purchase/purchaseService";
import { PurchaseParam } from "#/usecase/purchase/purchaseUsecase";
import { LimitedPeriodOfSalesProduct } from "../product/limitedPeriodOfSalesProduct";
import { NoLimitedProduct } from "../product/noLimitedProduct";

export class Purchase{
    
    constructor(
        private readonly purchaseParam: PurchaseParam,
        private readonly product: NoLimitedProduct | LimitedPeriodOfSalesProduct
    ) {
        this.purchaseParam = purchaseParam;
        this.product = product;
    }

    public checkPurchase(): boolean {
        if (this.product instanceof NoLimitedProduct) {
            return true;
        }

        if (this.product instanceof LimitedPeriodOfSalesProduct) {
            const purchaseHistories = new PurchaseService().getPurchaseHistories(this.purchaseParam.userId, this.purchaseParam.productId);
            const purchasedNumber = purchaseHistories.getPurchaseHistories().filter(purchaseHistory => purchaseHistory.purchaseDate.getFullYear() === new Date().getFullYear())
                .reduce((sum, purchaseHistory) => sum + purchaseHistory.purchaseNumber, 0);

            if (purchasedNumber >= this.product.limitedNumber) throw new Error("この商品はおひとりさま1年に1品だけ購入可能です");
            return true;
        }

        return true;
    }
}