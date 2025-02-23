import { Injectable } from '@angular/core';
import { Apartment } from '../core/models/apartment.model';

@Injectable({
  providedIn: 'root'
})
export class ApartmentsService {

  listApartments: Apartment[] = [];

  constructor() { }

  getApartments(): Apartment[] {
    return this.listApartments;
  }

  addApartment(apart: Apartment): void {
    this.listApartments.push(apart);
  }

  getApartmentsByID(id: number): Apartment[] {
    return this.listApartments.filter(apart => apart.ResidenceId === id);
  }
}
