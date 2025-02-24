import { Component, OnInit } from '@angular/core';
import { ResidenceService } from 'src/app/services/residence.service';
import { Residence } from 'src/app/core/models/residence.model';
import { CommonService } from 'src/app/services/common.service';
@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css']
})
export class ResidencesComponent implements OnInit {
  searchText: string = '';
  listResidences: Residence[] = [];
  listResidencesFav: Residence[] = [];

  constructor(
    private CommonService: CommonService, 
    private residenceService: ResidenceService) {}

  ngOnInit() {
    this.listResidences = this.residenceService.getResidences();
  }

  showLocation(address: string) {
    if (address.toLowerCase() === 'inconnu') {
      alert('The address of this residence is unknown.');
    } else {
      alert('Residence Address: ' + address);
    }
  }

  countSameAddresses(address: string): number {
    return this.CommonService.getSameValueOf(this.listResidences, 'address', address);
  }

  addToFavorites(residence: Residence) {
    if (!this.listResidencesFav.find(fav => fav.id === residence.id)) {
      this.listResidencesFav.push(residence);
    }
  }

  
}