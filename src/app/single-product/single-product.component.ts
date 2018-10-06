import { Component, Input } from '@angular/core';
import { IProduct } from '../model/IProduct';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent {

  constructor() { }

  @Input() product: IProduct;
}