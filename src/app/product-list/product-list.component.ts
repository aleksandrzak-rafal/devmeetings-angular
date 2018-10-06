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
    { name: "test1", price: 10 },
    { name: "test2", price: 20 },
    { name: "test3", price: 30 },
    { name: "test4", price: 40 },
    { name: "test5", price: 50 }
  ]
  
}
