import { AbouteComponent } from './aboute/aboute.component';
import { HomeComponent } from './home/home.component';

import {Routes} from '@angular/router'


export const ROUTES: Routes = [
    {path: '',component:HomeComponent},
    {path: 'about',component:AbouteComponent}
]