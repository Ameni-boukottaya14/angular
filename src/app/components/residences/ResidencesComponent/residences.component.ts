import { Component } from '@angular/core';
import { Residence } from 'src/app/core/models/residence.model';

@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css']
})
export class ResidencesComponent {
  searchText: string = '';


  listResidences: Residence[] = [
    { id: 1, name: "El Fel", address: "Borj Cedria", image: "../../assets/images/R1.jpeg", status: "Disponible" },
    { id: 2, name: "El Yasmine", address: "Ezzahra", image: "../../assets/images/R1.jpeg", status: "Disponible" },
    { id: 3, name: "El Arij", address: "Rades", image: "../../assets/images/R2.jpg", status: "Vendu" },
    { id: 4, name: "El Anber", address: "inconnu", image: "../../assets/images/R3.jpg", status: "En Construction" }
  ];

  listResidencesFav: Residence[] = [];

  showLocation(address: string) {
    if (address.toLowerCase() === 'inconnu') {
      alert('The address of this residence is unknown.');
    } else {
      alert('Residence Address: ' + address);
    }
  }

  addToFavorites(residence: Residence) {
    if (!this.listResidencesFav.find(fav => fav.id === residence.id)) {
      this.listResidencesFav.push(residence);
  }
}
}
