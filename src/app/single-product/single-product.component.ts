import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from '../model/IProducs';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() product: IProduct;
}