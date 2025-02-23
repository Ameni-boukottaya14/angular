import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApartmentsService } from 'src/app/services/apartments.service';
import { Apartment } from 'src/app/core/models/apartment.model';

@Component({
  selector: 'app-add-apartment',
  templateUrl: './add-apartment.component.html',
  styleUrls: ['./add-apartment.component.css']
})
export class AddApartmentComponent implements OnInit {

  apartForm!: FormGroup;
  residenceId!: number;

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private apartmentsService: ApartmentsService
  ) {}

  ngOnInit(): void {
    this.residenceId = Number(this.route.snapshot.paramMap.get('residenceId'));

    this.apartForm = new FormGroup({
      apartNum: new FormControl('', [Validators.required, Validators.min(1)]),
      floorNum: new FormControl('', [Validators.required, Validators.min(1)]),
      surface: new FormControl('', [Validators.required, Validators.min(10)]),
      terrace: new FormControl(false), // Checkbox default to false
      surfaceterrace: new FormControl('', [Validators.min(0)]),
      category: new FormControl('', Validators.required),
    });
  }

  onSubmit(): void {
    if (this.apartForm.valid) {
      const newApartment: Apartment = {
        ...this.apartForm.value,
        ResidenceId: this.residenceId, 
      };

      // Add the apartment and automatically update the list in the apartments service
      this.apartmentsService.addApartment(newApartment);
      console.log('Apartment added:', newApartment);

      // Navigate back to the apartments list (it will now reflect the updated list)
      this.router.navigate([`/apartments`]); 
    }
  }
}
