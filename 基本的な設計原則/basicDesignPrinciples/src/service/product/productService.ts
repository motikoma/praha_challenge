// import { PrismaClient } from '@prisma/client'

import { LimitedPeriodOfSalesProduct } from "#/domain/product/limitedPeriodOfSalesProduct";

export class ProductService {
    constructor() {}

    public getProduct(productId: string) {
        
        // 商品idを元にデータベースの特定のカラム情報がenableかどうかで生成するドメインモデルを出し分ける

        // イメージ
        // const prisma = new PrismaClient()    
        //     const product = await prisma.product.find({
        //         where: {
        //             id: productId,
        //         },
        //     })
        //     if(product.limitedSaleOfPiecesPerYearsProduct.enable = true){
        //         return new LimitedSaleOfPiecesPerYearsProduct(product.id, product.name, product.enable);
        //     } else {
        //         return new Product(product.id, product.name, product.limitedNumber, product.limitedYear);
        //     }
        // 
        return new LimitedPeriodOfSalesProduct(productId, "hoge", 3, 1);
    }
}