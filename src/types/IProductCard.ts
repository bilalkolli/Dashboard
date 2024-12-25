import type { IFeature } from "./IFeature"

export interface IProductCard {
    price: number,
    Bedrooms: number,
    Bathrooms: number,
    LivingArea: number,
    Adress: string,
    features: IFeature[],
    Image: string
}  