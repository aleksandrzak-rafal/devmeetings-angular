import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/IProducs';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  product: IProduct = {
    name: "test", price: 10
  }
}