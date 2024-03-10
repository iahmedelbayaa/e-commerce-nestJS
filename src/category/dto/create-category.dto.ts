export class CreateCategoryDto {
    readonly name: string;
    readonly createdAt: Date;
    readonly updatedAt: Date;
    // one to many with product

}
