import { Observable } from 'rxjs/Observable';
import { CategoriaService } from './../services/categoria.service';
import { Categoria } from './../models/categoria.model';

import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'mt-input-material',
    templateUrl: './input-material.component.html',
    styleUrls: ['./input-material.component.css']
})
export class InputMaterialComponent implements OnInit {

    public categorias: Categoria[];
    constructor(private service: CategoriaService) { }

    ngOnInit() {

     this.service.getListCategorias().subscribe((response:Categoria[]) => { console.log(response)})


        console.log(this.categorias)

    }

}
