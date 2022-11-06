export interface PurchaseRepository {
    create(userId: string, product: Product): Product;
}