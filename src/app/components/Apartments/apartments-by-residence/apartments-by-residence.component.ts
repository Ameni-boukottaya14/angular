import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  allApartments: Apartment[] = [
    { apartNum: 101, floorNum: 1, surface: 120, terrace: true, surfaceterrace: 20, category: "Luxury", ResidenceId: 1 },
    { apartNum: 102, floorNum: 1, surface: 90, terrace: false, surfaceterrace: 0, category: "Standard", ResidenceId: 1 },
    { apartNum: 201, floorNum: 2, surface: 130, terrace: true, surfaceterrace: 25, category: "Luxury", ResidenceId: 2 },
    { apartNum: 202, floorNum: 2, surface: 100, terrace: false, surfaceterrace: 0, category: "Standard", ResidenceId: 2 },
    { apartNum: 301, floorNum: 3, surface: 110, terrace: true, surfaceterrace: 15, category: "Penthouse", ResidenceId: 3 },
    { apartNum: 302, floorNum: 3, surface: 95, terrace: false, surfaceterrace: 0, category: "Standard", ResidenceId: 3 }
  ];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.residenceId = Number(this.route.snapshot.paramMap.get('id'));

    const residences = [
      { id: 1, name: "El Fel" },
      { id: 2, name: "El Yasmine" },
      { id: 3, name: "El Arij" }
    ];

    const residence = residences.find(res => res.id === this.residenceId);
    this.residenceName = residence ? residence.name : 'Unknown Residence';

    this.apartments = this.allApartments.filter(apartment => apartment.ResidenceId === this.residenceId);
  }

  navigateToAddApartment() {
    this.router.navigate([`/apartments/add`]);
  }
}
