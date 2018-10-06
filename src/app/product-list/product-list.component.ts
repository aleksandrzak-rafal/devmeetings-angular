import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";
import { IProduct } from '../model/IProduct';
import { GameRepository } from '../services/gameRepository'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  public searchInput = new FormControl();
  public filteredProducts: IProduct[];
  public priceSortOrder: string;
  public nameSortOrder: string;
  public products: IProduct[];

  constructor (productReposotry: GameRepository) {
    this.searchInput.valueChanges.subscribe(value => this.filterProducts(value));
    this.priceSortOrder = "-";
    this.nameSortOrder = "-";
    this.products = productReposotry.getProducts();
  }

  ngOnInit() {
    this.filteredProducts = this.products;
  }
  
  onClickPriceSort (button) {
    this.nameSortOrder = "-";
    if (this.priceSortOrder === "-") {
      this.priceSortOrder = "ASC";
    }
    else if (this.priceSortOrder === "ASC") {
      this.priceSortOrder = "DESC";
    }
    else if (this.priceSortOrder === "DESC") {
      this.priceSortOrder = "ASC";
    }
    this.sortProduct(p => p.price, this.priceSortOrder);
  }

  onClickNameSort (button) {
    this.priceSortOrder = "-";
    if (this.nameSortOrder === "-") {
      this.nameSortOrder = "ASC";
    }
    else if (this.nameSortOrder === "ASC") {
      this.nameSortOrder = "DESC";
    }
    else {
      this.nameSortOrder = "ASC";
    }
    this.sortProduct(p => p.name, this.nameSortOrder);
  }

  filterProducts(filterString: string): void {
    filterString = filterString.toLowerCase();
    this.filteredProducts = this.products.filter(function (pr) {
      if (filterString !== "") {
        return pr.name.toLowerCase().includes(filterString) || 
          pr.price == +filterString || 
          (filterString === "promo" && pr.promo === true)||
          pr.tags.filter(function (t) {
            return t.toLowerCase().includes(filterString);
          }).length > 0;
      }
      else {
        return true;
      }
    });
  }

  sortProduct<T>(prop: (c: IProduct) => T, order): void {
    this.filteredProducts.sort((a, b) => {
        if (prop(a) < prop(b))
            return -1;
        if (prop(a) > prop(b))
            return 1;
        return 0;
    });

    if (order === "DESC") {
      this.filteredProducts.reverse();
    }   
  }
}
