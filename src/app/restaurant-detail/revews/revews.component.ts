import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { RestaurantsService } from './../../restaurants/restaurants.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-revews',
  templateUrl: './revews.component.html',
  styleUrls: ['./revews.component.css']
})
export class RevewsComponent implements OnInit {

  reviews:Observable<any>

  constructor(private restaurantsService:RestaurantsService,private route:ActivatedRoute) { }

  ngOnInit() {

    let id = this.route.parent.snapshot.params['id'];

    this.reviews = this.restaurantsService.revewsOfRestaurant(id);

  }

}
