import { Injectable } from "@angular/core";
import { Games } from '../model/games';

@Injectable()
export class GameRepository {
    products: Games[] = [
        { name: "GTA V", price: 49, promo: false, tags: ["18+", "violence", "drugs", "bad language"]},
        { name: "FIFA 19", price: 49, promo: false, tags: ["3+"]},
        { name: "The Legend of Zelda: Breath of the Wild", price: 39, promo: true, tags: ["13+", "violence"] },
        { name: "Darkest Dungeon", price: 19, promo: true, tags: ["16+", "violence"] },
        { name: "Firewatch", price: 19, promo: false, tags: ["12+"] }
      ]

    public getProducts (): Games[] {
        return this.products;
    }
}