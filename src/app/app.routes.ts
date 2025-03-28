import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SafarisComponent } from './safaris/safaris.component';
import { SafariDetailsComponent } from './safaris/safari-details/safari-details.component';
import { ExcursionsComponent } from './excursions/excursions.component';

export const routes: Routes = [
{
    path:'', component:HomeComponent
},
{
    path:'safaris',component:SafarisComponent
},
{
    path:'safaris/:slug',component:SafariDetailsComponent
},
{
    path:'excursions',component:ExcursionsComponent
}
];
