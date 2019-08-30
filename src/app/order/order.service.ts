import { CartItem } from './../restaurant-detail/shopping-cart/cart-item.model';
import { ShoppingCardService } from './../restaurant-detail/shopping-cart/shopping-card.service';
import { Injectable } from "@angular/core";



@Injectable()
export class OrderService{

    constructor(private cartService:ShoppingCardService){

    }

    cartItems():CartItem[]{

       return this.cartService.items;

    }

   


}