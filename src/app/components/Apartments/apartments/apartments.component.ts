import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
@Component({
  selector: 'app-apartments',
  templateUrl: './apartments.component.html',
  styleUrls: ['./apartments.component.css']
})
export class ApartmentsComponent {
  apartments = [
    { apartNum: 101, floorNum: 1, surface: 100, terrace: true, surfaceterrace: 10, category: "Luxury", residenceId: 1 },
    { apartNum: 102, floorNum: 2, surface: 85, terrace: false, surfaceterrace: 0, category: "Standard", residenceId: 1 },
    { apartNum: 201, floorNum: 2, surface: 110, terrace: true, surfaceterrace: 12, category: "Premium", residenceId: 2 },
    { apartNum: 301, floorNum: 3, surface: 90, terrace: false, surfaceterrace: 0, category: "Standard", residenceId: 3 },
  ];

  constructor(
    private CommonService: CommonService, 
    private router: Router) {}

  navigateToAddApartment() {
    this.router.navigate(['/apartments/add']);
  }

  countSameSurface(surface: number): number {
    return this.CommonService.getSameValueOf(this.apartments, 'surface', surface);
  }
}
