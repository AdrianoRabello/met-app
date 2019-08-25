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
import {FormsModule} from "@angular/forms"





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
    
   
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
    
  ],
  providers: [
    RestaurantsService,
    ShoppingCardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
