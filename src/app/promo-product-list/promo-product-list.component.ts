import { Component } from '@angular/core';
import { IProduct } from '../model/IProduct';
import { GameRepository } from '../services/gameRepository'

@Component({
  selector: 'app-promo-product-list',
  templateUrl: './promo-product-list.component.html',
  styleUrls: ['./promo-product-list.component.css']
})
export class PromoProductListComponent {
  products: IProduct[];

  constructor(productRepository: GameRepository) {
    this.products = productRepository.getProducts();
  }
  
  getPromoProducts() : IProduct[]{
    return this.products.filter(function (pr) {
      return pr.promo === true;
    });
  }
}
