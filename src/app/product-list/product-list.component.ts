import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/IProducs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  products: IProduct[] = [
    { name: "test1", price: 10, promo: false},
    { name: "test2", price: 20, promo: false },
    { name: "test3", price: 30, promo: true },
    { name: "test4", price: 40, promo: true },
    { name: "test5", price: 50, promo: false }
  ]
  
  getPromoProducts() : IProduct[]{
    return this.products.filter(function (pr) {
      return pr.promo === true;
    });
  }
}
