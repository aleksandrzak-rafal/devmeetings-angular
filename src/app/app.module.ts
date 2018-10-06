import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { GamesRepository } from './services/games.repository';
import { GamesService } from './services/games.service';

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
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [GamesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
