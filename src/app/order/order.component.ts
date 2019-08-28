import { Component, OnInit } from '@angular/core';
import { RadioOption } from 'app/shared/radio/radio-option.model';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  paymentOptions:RadioOption[] = [

    {label:"Dinheiro",value: "Mon"},
    {label:"Cartão de débito",value: "Deb"},
  ]

  constructor() { }

  ngOnInit() {

    //console.log(form);
  }

}
