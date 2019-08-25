import { RestaurantsService } from './restaurants.service';
import { Component, OnInit,Input } from '@angular/core';
import { Restaurant } from './restaurant.model';



@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

  public restaurants:Restaurant[];
  constructor(private restaurantsService:RestaurantsService) { }

  ngOnInit() {

     this.restaurantsService.getRestaurants().subscribe((response)=> {this.restaurants = response});
  }

}
