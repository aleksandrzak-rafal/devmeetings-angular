import { Component, Input } from '@angular/core';
import { IProduct } from './model/IProducs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'products-viewer-devmeetings-angular';
  
  products: IProduct[] = [
    { name: "GTA V", price: 99, promo: false, tags: ["violence", "drugs", "bad language"]},
    { name: "FIFA 19", price: 20, promo: false, tags: ["3+"]},
    { name: "test3", price: 30, promo: true },
    { name: "test4", price: 40, promo: true },
    { name: "test5", price: 50, promo: false }
  ]
}
