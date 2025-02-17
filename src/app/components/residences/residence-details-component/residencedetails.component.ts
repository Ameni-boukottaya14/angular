import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResidenceService } from 'src/app/services/residence.service';
import { Residence } from 'src/app/core/models/residence.model';

@Component({
  selector: 'app-residence-details',
  templateUrl: './residencedetails.component.html',
  styleUrls: ['./residencedetails.component.css']
})
export class ResidenceDetailsComponent implements OnInit {
  residence: Residence | undefined;
  currentId: number = 0;

  constructor(
    private route: ActivatedRoute,
    private residenceService: ResidenceService, // Fixed camelCase
    private router: Router
  ) {}

  ngOnInit(): void {
    // Get the residence ID from the route
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.currentId = id;
      this.getResidenceDetails(id);
    });
  }

  // Get residence details by ID
  getResidenceDetails(id: number): void {
    this.residence = this.residenceService.getResidenceById(id);
  }

  // Navigate to the next residence
  goToNextResidence(): void {
    const nextId = this.residenceService.getNextResidenceId(this.currentId);
    if (nextId) {
      this.router.navigate(['/residences/details', nextId]);
    }
  }
  getStatusClass(status: string): string {
    switch (status) {
      case 'Disponible': return 'status-available';
      case 'Vendu': return 'status-sold';
      case 'En Construction': return 'status-construction';
      default: return 'status-default';
    }
  }

  addRes(){
    this.router.navigate(['/addRresidence']);
  }

  
  updateRes(id: number){
    this.router.navigate(['/updateResidence',this.currentId]);
  }

}