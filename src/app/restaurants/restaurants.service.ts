import { MenuItem } from './../restaurant-detail/menu-item/menu-item.model';
import { ErrorHandler } from './../app.error-handler';
import { MEAT_API } from './../app.api';
import { Restaurant } from './restaurant.model';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { errorHandler } from '@angular/platform-browser/src/browser';

@Injectable()
export class RestaurantsService{

    
  public restauran:Restaurant;
    constructor(private http:Http){

    }

    getRestaurants():Observable<Restaurant[]>{

        return this.http.get(`${MEAT_API}/restaurants`).map(response => response.json()).catch(ErrorHandler.handleError);       

    }

    getRestaurantById(id:string):Observable<Restaurant>{

      return this.http.get(`${MEAT_API}/restaurants/${id}`).map(response => response.json()).catch(ErrorHandler.handleError);  
     

    }


    public menuOfRestaurant(id:string):Observable<MenuItem[]>{

      return this.http.get(`${MEAT_API}/restaurants/${id}/menu`).map(response => response.json()).catch(ErrorHandler.handleError);  

    }


    revewsOfRestaurant(id:string):Observable<any>{

      return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`).map(response => response.json()).catch(ErrorHandler.handleError);
    }
}