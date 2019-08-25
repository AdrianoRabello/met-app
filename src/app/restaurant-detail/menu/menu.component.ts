import { MenuItem } from './../menu-item/menu-item.model';
import { Observable } from 'rxjs/Observable';
import { RestaurantsService } from './../../restaurants/restaurants.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public menu:Observable<MenuItem[]>;
  constructor(private restauranteService:RestaurantsService,private route:ActivatedRoute) { }

  ngOnInit() {

    let id:string = this.route.parent.snapshot.params['id'];

    

    this.menu = this.restauranteService.menuOfRestaurant(id);



   
  }

}
