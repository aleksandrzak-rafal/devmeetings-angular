import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from '../model/IProduct'

@Injectable()
export class GamesService {
  productsUrl = 'assets/games.json';

  constructor(private http: HttpClient) { }
  
  getProducts() {
    return this.http.get(this.productsUrl);
  }
}
