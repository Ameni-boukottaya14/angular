import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApartmentsService } from 'src/app/services/apartments.service';
import { Apartment } from 'src/app/core/models/apartment.model';

@Component({
  selector: 'app-apartments-by-residence',
  templateUrl: './apartments-by-residence.component.html',
  styleUrls: ['./apartments-by-residence.component.css']
})
export class ApartmentsByResidenceComponent implements OnInit {
  residenceId!: number;
  residenceName!: string;
  apartments: Apartment[] = [];

  constructor(private route: ActivatedRoute, 
              private router: Router, 
              private apartmentsService: ApartmentsService) {}

  ngOnInit(): void {
    this.residenceId = Number(this.route.snapshot.paramMap.get('id'));
    
    const residences = [
      { id: 1, name: "El Fel" },
      { id: 2, name: "El Yasmine" },
      { id: 3, name: "El Arij" }
    ];

    const residence = residences.find(res => res.id === this.residenceId);
    this.residenceName = residence ? residence.name : 'Unknown Residence';

    // Fetch apartments based on the residence ID
    this.apartments = this.apartmentsService.getApartmentsByID(this.residenceId);
  }

  navigateToAddApartment() {
    this.router.navigate([`/apartments/add`]);
  }
}
