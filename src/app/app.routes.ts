import { AbouteComponent } from './aboute/aboute.component';
import { HomeComponent } from './home/home.component';

import {Routes} from '@angular/router'
import { RestaurantsComponent } from './restaurants/restaurants.component';


export const ROUTES: Routes = [
    {path: '',component:HomeComponent},
    {path: 'about',component:AbouteComponent},
    {path: 'restaurants',component:RestaurantsComponent}
]