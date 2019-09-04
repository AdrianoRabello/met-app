import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mt-demivery-costs',
  templateUrl: './demivery-costs.component.html',
  styleUrls: ['./demivery-costs.component.css']
})
export class DemiveryCostsComponent implements OnInit {

  @Input() public frete:number = 8;
  @Input() public valorItens:number;
  constructor() { }

  ngOnInit() {
  }

  total():number{

    return this.frete + this.valorItens;
  }

}
