import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Residence } from '../core/models/residence.model';

@Injectable({
  providedIn: 'root'
})

export class ResidenceService {
  private residences: Residence[] = [
    { id: 1, name: "El Fel", address: "Borj Cedria", image: "../../assets/images/R1.jpeg", status: "Disponible" },
    { id: 2, name: "El Yasmine", address: "Ezzahra", image: "../../assets/images/R1.jpeg", status: "Disponible" },
    { id: 3, name: "El Arij", address: "Rades", image: "../../assets/images/R2.jpg", status: "Vendu" },
    { id: 4, name: "El Anber", address: "inconnu", image: "../../assets/images/R3.jpg", status: "En Construction" }
  ];
  getResidenceById(id: number): Residence | undefined {
    return this.residences.find(residence => residence.id === id);
  }
  
  getNextResidenceId(id: number): number | null {
    const currentIndex = this.residences.findIndex(res => res.id === id);
    if (currentIndex >= 0 && currentIndex < this.residences.length - 1) {
      return this.residences[currentIndex + 1].id;
    }
    return null; // Pas de résidence suivante
  }}
  
