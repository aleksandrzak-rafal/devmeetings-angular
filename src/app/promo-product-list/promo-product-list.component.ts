import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from '../model/IProducs';

@Component({
  selector: 'app-promo-product-list',
  templateUrl: './promo-product-list.component.html',
  styleUrls: ['./promo-product-list.component.css']
})
export class PromoProductListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() products: IProduct[];
  
  getPromoProducts() : IProduct[]{
    return this.products.filter(function (pr) {
      return pr.promo === true;
    });
  }
}
