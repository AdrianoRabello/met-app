import { CategoriaService } from './testes/services/categoria.service';
import { DemiveryCostsComponent } from './order/demivery-costs/demivery-costs.component';
import { OrderService } from './order/order.service';
import { OrderItemsComponent } from './order/order-items/order-items.component';
import { InputMaterialComponent } from './testes/input-material/input-material.component';
import { InputComponent } from './shared/input/input.component';
import { OrderComponent } from './order/order.component';
import { ShoppingCardService } from './restaurant-detail/shopping-cart/shopping-card.service';
import { RevewsComponent } from './restaurant-detail/revews/revews.component';
import { RestaurantsService } from 'app/restaurants/restaurants.service';
import { ShoppingCartComponent } from './restaurant-detail/shopping-cart/shopping-cart.component';
import { MenuItemComponent } from './restaurant-detail/menu-item/menu-item.component';
import { MenuComponent } from './restaurant-detail/menu/menu.component';
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AbouteComponent } from './aboute/aboute.component'


/* meus imports */
import { ROUTES } from './app.routes';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { PageTesteComponent } from './testes/page-teste/page-teste.component';

/* material */
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RadioComponent } from './shared/radio/radio.component';












@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AbouteComponent,
    RestaurantsComponent,
    RestaurantComponent,
    RestaurantDetailComponent,
    MenuComponent,
    MenuItemComponent,
    ShoppingCartComponent,
    RevewsComponent,
    OrderComponent,
    InputComponent,
    PageTesteComponent,
    InputMaterialComponent,
    RadioComponent,
    OrderItemsComponent,
    DemiveryCostsComponent
    
   
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    
    RouterModule.forRoot(ROUTES)
    
  ],
  providers: [
    RestaurantsService,
    ShoppingCardService,
    OrderService,
    CategoriaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
