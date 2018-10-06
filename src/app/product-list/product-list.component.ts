import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from '../model/IProducs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() products: IProduct[];
}
