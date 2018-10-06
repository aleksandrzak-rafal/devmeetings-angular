import { Component } from '@angular/core';
import { IProduct } from '../model/IProduct';
import { GamesService } from '../services/games.service'

@Component({
  selector: 'app-promo-product-list',
  templateUrl: './promo-product-list.component.html',
  styleUrls: ['./promo-product-list.component.css']
})
export class PromoProductListComponent {
  products: IProduct[];

  constructor(productRepository: GamesService) {
    productRepository.getProducts().subscribe((data: IProduct[]) => this.products = data);
  }
  
  getPromoProducts() : IProduct[] {
    return this.products.filter(function (pr) {
      return pr.promo === true;
    });
  }
}
