import { CartItem } from './../restaurant-detail/shopping-cart/cart-item.model';
import { OrderService } from './order.service';
import { MenuItem } from './../restaurant-detail/menu-item/menu-item.model';
import { RadioOption } from './../shared/radio/radio-option.model';

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Order,OrderItem } from './order.model';
import { map } from 'rxjs/operator/map';

@Component({
    selector: 'mt-order',
    templateUrl: './order.component.html',
    styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

    paymentOptions: RadioOption[] = [
        new RadioOption('dinehiro', 'MON'),
        new RadioOption('Cartão débito', 'DEB'),
        new RadioOption('Cartão credito', 'CRED')

    ];



 /*    @Output() increaseQty = new EventEmitter<CartItem>();
    @Output() decreaseQty = new EventEmitter<CartItem>();
    @Output() remove = new EventEmitter<CartItem>(); */


    items: CartItem[];
    private frete:number = 8;

    orderForm: FormGroup;
    constructor(private formBuilder: FormBuilder, private orderService: OrderService) { }

    ngOnInit() {

        this.orderForm = this.formBuilder.group({
            email: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
            endereco: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
            paymentOption: this.formBuilder.control('', [Validators.required, Validators.minLength(2)]),
            optionalAdress: this.formBuilder.control('')

        })


        this.items = this.orderService.cartItems();


    }


    cartItens(): CartItem[] {
        return this.orderService.cartItems()
    }


    increaseQty(item: CartItem) {

        this.orderService.increaseQty(item);
    }

    decreaseQty(item: CartItem) {
        this.orderService.dereaseQty(item);
    }

    remove(item: CartItem) {
        this.orderService.remove(item);
    }

    total():number{
        return this.orderService.total();
    }

    checkOrder(order:Order){

        order.orderItems = this.items.map((item:CartItem) => { return  new OrderItem(item.quantity,item.menuItem.id)})

        //console.log(order)

        this.orderService.chackOrder(order).subscribe((orderId:string) => {console.log(orderId)})
        
        this.orderService.clear();

        this.orderForm.reset();
    }
    
        

}
