import { IProduct } from './IProduct';

export class Games implements IProduct {
    name: string;
    price: number;
    promo?: boolean;
    tags?: string[];
}