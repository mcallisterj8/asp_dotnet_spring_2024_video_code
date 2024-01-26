import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { VehicleListComponent } from './components/vehicle-list/vehicle-list.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'vehicle/all', component: VehicleListComponent },

    { path: '**', component: PageNotFoundComponent },
];
