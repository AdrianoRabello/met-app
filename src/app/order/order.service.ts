import { Observable } from 'rxjs/Observable';
import { MEAT_API } from './../app.api';
import { Http, Headers, Request, RequestOptions } from '@angular/http';
import { CartItem } from './../restaurant-detail/shopping-cart/cart-item.model';
import { ShoppingCardService } from './../restaurant-detail/shopping-cart/shopping-card.service';
import { Injectable } from "@angular/core";
import { Order,OrderItem } from './order.model';



@Injectable()
export class OrderService{

    constructor(private cartService:ShoppingCardService,private http:Http){

    }

    cartItems():CartItem[]{

       return this.cartService.items;

    }

    increaseQty(item:CartItem){

        this.cartService.increaseQty(item)
    }

    dereaseQty(item:CartItem){

        this.cartService.decreaseQty(item)
    }


    remove(item:CartItem){
        this.cartService.removeItem(item);
    }

    total():number{
        return this.cartService.total()
    }

    clear(){

        this.cartService.clear();
    }

    chackOrder(order:Order):Observable<string>{

        let headers = new Headers();
        headers.append('Cotent-type','aplication/json');

        return this.http.post(`${MEAT_API}/orders`,JSON.stringify(order),new RequestOptions({headers:headers})).map( response => response.json())
    }

   


}