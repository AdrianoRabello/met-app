import { RevewsComponent } from './restaurant-detail/revews/revews.component';
import { MenuComponent } from './restaurant-detail/menu/menu.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { AbouteComponent } from './aboute/aboute.component';
import { HomeComponent } from './home/home.component';

import {Routes} from '@angular/router'
import { RestaurantsComponent } from './restaurants/restaurants.component';


export const ROUTES: Routes = [
    {path: '',component:HomeComponent},
   
    {path: 'restaurants',component:RestaurantsComponent},
    {path: 'restaurants/:id',component:RestaurantDetailComponent,
        children: [
            {path: '',redirectTo: 'menu',pathMatch:'full'},
            {path: 'menu',component:MenuComponent},
            {path:'reviews', component:RevewsComponent}
        ]
    },
    {path: 'about',component:AbouteComponent}
]