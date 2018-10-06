import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { PromoProductListComponent } from './promo-product-list/promo-product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SingleProductComponent,
    ProductListComponent,
    PromoProductListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
