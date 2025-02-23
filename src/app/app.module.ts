import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResidencesComponent } from './components/residences/ResidencesComponent/residences.component';
import { FilterPipe } from './filter.pipe';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header-component/header.component';
import { HomeComponent} from './components/home-component/home.component';
import { ResidenceDetailsComponent } from './components/residences/residence-details-component/residencedetails.component';
import { AddResidenceComponent } from './components/residences/add-residence-component/add-residence-component.component';
import { FooterComponent } from './components/footer-component/footer-component.component';
import { NotFoundComponent } from './components/not-found-component/not-found-component.component';
import { ApartmentsComponent } from './components/Apartments/apartments/apartments.component';
import { ApartmentsByResidenceComponent } from './components/Apartments/apartments-by-residence/apartments-by-residence.component';
import { AddApartmentComponent } from './components/Apartments/add-apartment/add-apartment.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ResidencesComponent,
    FilterPipe,
    HeaderComponent,
    HomeComponent,
    ResidenceDetailsComponent,
    AddResidenceComponent,
    FooterComponent,
    NotFoundComponent,
    ApartmentsComponent,
    ApartmentsByResidenceComponent,
    AddApartmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
