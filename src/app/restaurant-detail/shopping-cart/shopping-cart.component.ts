import { ShoppingCardService } from './shopping-card.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  constructor(private shoppingCardService:ShoppingCardService) { }

  ngOnInit() {


  }


  items():any[]{

    return this.shoppingCardService.items
  }

  clear(){

    this.shoppingCardService.clear();
  }

  removeItem(item:any){
    this.shoppingCardService.removeItem(item);
  }

  addItem(item:any){
    this.shoppingCardService.addItem(item);
  }

  total():number{
    return this.shoppingCardService.total();
  }
}
