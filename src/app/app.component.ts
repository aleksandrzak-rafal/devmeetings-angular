import { Component, Input } from '@angular/core';
import { IProduct } from './model/IProduct';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'products-viewer-devmeetings-angular';
  
  products: IProduct[] = [
    { name: "GTA V", price: 49, promo: false, tags: ["18+", "violence", "drugs", "bad language"]},
    { name: "FIFA 19", price: 49, promo: false, tags: ["3+"]},
    { name: "The Legend of Zelda: Breath of the Wild", price: 39, promo: true, tags: ["13+", "violence"] },
    { name: "Darkest Dungeon", price: 19, promo: true, tags: ["16+", "violence"] },
    { name: "Firewatch", price: 19, promo: false, tags: ["12+"] }
  ]
}
