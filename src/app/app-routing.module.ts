import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home.component';
import { ResidencesComponent } from './components/residences/ResidencesComponent/residences.component';
import { ResidenceDetailsComponent } from './components/residences/residence-details-component/residencedetails.component';

import { AddApartmentComponent } from './components/Apartments/add-apartment/add-apartment.component';
import { ApartmentsByResidenceComponent } from './components/Apartments/apartments-by-residence/apartments-by-residence.component';
import { AddResidenceComponent } from './components/residences/add-residence-component/add-residence-component.component';
import { ApartmentsComponent } from './components/Apartments/apartments/apartments.component';
import { NotFoundComponent } from './components/not-found-component/not-found-component.component';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'residences', component: ResidencesComponent },
  { path: 'residences/details/:id', component: ResidenceDetailsComponent },
  { path: 'apartments', component: ApartmentsComponent },
  { path: 'addRresidence', component: AddResidenceComponent},
  { path: 'updateResidence/:id', component: AddResidenceComponent},
  { path: 'residences/:id/apartments', component: ApartmentsByResidenceComponent },
  { path: 'apartments/add', component: AddApartmentComponent },
  { path: '', redirectTo: '/residences', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }