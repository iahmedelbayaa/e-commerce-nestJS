export class CreateProductDto {
    readonly name: string;
    readonly description: string;
    readonly price: number;
    readonly stock: number;
    readonly image: string;
    readonly brand: string;
    readonly rating: number;
    readonly numReviews: number;
    readonly countInStock: number;
    readonly user: string;
    readonly reviews: string[];
    readonly createdAt: Date;
    readonly updatedAt: Date;
    
}
