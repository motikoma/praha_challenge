// import { PrismaClient } from '@prisma/client'

import { PurchaseHistories, PurchaseHistory } from "#/domain/purchase/purchaseHistory";

export class PurchaseService {
    constructor() {}

    public getPurchaseHistories(userId: string, productId: string) {
        
        // userIdとproductIdを元に購入履歴を取得する

        // イメージ
        // const prisma = new PrismaClient()    
        //     const purchaseHistory = await prisma.purchaseHistory.findMany({
        //         where: {
        //             userId: userId,  
        //             id: productId,
        //         },
        //     })
        //
        //     const purchaseHistories = new PurchaseHistories();
        //     purchaseHistory.forEach((history) => {
        //         purchaseHistories.push(purchaseHistory); 
        // })
        
        return new PurchaseHistories([new PurchaseHistory(
            "userId",
            "productId",
            new Date('December 17, 1995 03:24:00'),
            1
        )]);
    }
}