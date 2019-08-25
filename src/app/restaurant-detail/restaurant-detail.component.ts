
import { Component, OnInit, Input } from '@angular/core';
import { RestaurantsService } from 'app/restaurants/restaurants.service';
import { Restaurant } from 'app/restaurants/restaurant.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})


export class RestaurantDetailComponent implements OnInit {

  @Input()restaurant:Restaurant;
  constructor(private restaurantsService:RestaurantsService,private route:ActivatedRoute) { }

  ngOnInit() {

    let id = this.route.snapshot.params['id'];

    //console.log(id);

    this.restaurantsService.getRestaurantById(id).subscribe((response) => { this.restaurant = response })


  }

}
