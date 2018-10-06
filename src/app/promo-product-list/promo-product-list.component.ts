import { Component } from '@angular/core';
import { IProduct } from '../model/IProduct';
import { ProductRepository } from '../services/productRepository'

@Component({
  selector: 'app-promo-product-list',
  templateUrl: './promo-product-list.component.html',
  styleUrls: ['./promo-product-list.component.css']
})
export class PromoProductListComponent {
  products: IProduct[];

  constructor(productRepository: ProductRepository) {
    this.products = productRepository.getProducts();
  }
  
  getPromoProducts() : IProduct[]{
    return this.products.filter(function (pr) {
      return pr.promo === true;
    });
  }
}
