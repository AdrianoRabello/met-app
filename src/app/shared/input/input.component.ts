import { Component, OnInit, Input ,ContentChild, AfterContentInit} from '@angular/core';
import {NgModel, FormControlName, } from "@angular/forms";

@Component({
  selector: 'mt-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})

export class InputComponent implements OnInit,AfterContentInit{
    

    input:any;

    @Input()  errorMessage:string;

    @Input()  label:string;

    @ContentChild(NgModel) model:NgModel;
    
    @ContentChild(FormControlName) control:FormControlName;
  
    constructor() { }

    ngOnInit() {
    }

    ngAfterContentInit(): void {
        this.input = this.model || this.control;

        if(this.input == undefined){
            throw new Error("tem que ser usado com ngModel our formControl name")
        }
    }

    public hasSuccess():boolean{
        return this.input.valid && (this.input.dirty || this.input.touched)
    }

    public hasError():boolean{

      return this.input.invalid && this.input.touched
    }

  

}
