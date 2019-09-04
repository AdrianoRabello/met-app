import { Categoria } from './../models/categoria.model';
import { Observable } from 'rxjs/Observable';
import { CRUSOMC_URL } from './../../cursomc.url';
import { Http } from '@angular/http';
import { Injectable } from "@angular/core";



@Injectable()
export class CategoriaService{

    constructor(private http:Http){

    }


    getListCategorias():Observable<Categoria[]>{

        return this.http.get(`${CRUSOMC_URL}categorias`).map( response => <Categoria[]> response.json())
    }
}