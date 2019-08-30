import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'mt-order',
    templateUrl: './order.component.html',
    styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

    orderForm: FormGroup;
    constructor(private formBuilder:FormBuilder) { }

    ngOnInit() {

        this.orderForm = this.formBuilder.group({
            email: this.formBuilder.control('',[Validators.required,Validators.minLength(5)])
        })
    }

}
