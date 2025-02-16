import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home.component';
import { ResidencesComponent } from './components/residences/ResidencesComponent/residences.component';
import { ResidenceDetailsComponent } from './components/residences/residence-details-component/residencedetails.component';

import { ApartmentsComponent } from './components/Apartments/apartments/apartments.component';
import { NotFoundComponent } from './components/not-found-component/not-found-component.component';
const routes: Routes = [
  { path: '', redirectTo: 'residences', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'residences', component: ResidencesComponent },
  { path: 'residences/:id', component: ResidenceDetailsComponent },
  { path: 'apartments', component: ApartmentsComponent },
  { path: '**', component: NotFoundComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }