import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ResidenceService } from 'src/app/services/residence.service';
import { Residence } from 'src/app/core/models/residence.model';

@Component({
  selector: 'app-add-residence-component',
  templateUrl: './add-residence-component.component.html',
  styleUrls: ['./add-residence-component.component.css']
})
export class AddResidenceComponent implements OnInit {
  residenceForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private residenceService: ResidenceService,
    private router: Router
  ) {}

  ngOnInit() {
    this.residenceForm = this.fb.group({
      id: [this.generateNextId()], // Automatically generate the next ID
      name: ['', [Validators.required, Validators.minLength(3)]],
      address: ['', Validators.required],
      image: ['', [Validators.required, Validators.pattern('https?://.+')]],
      status: ['Disponible'],
      apartments: this.fb.array([]),
    });
  }

  generateNextId(): number {
    const residences = this.residenceService.getResidences();
    if (residences.length === 0) {
      return 1; // Start with ID 1 if no residences exist
    }
    const maxId = Math.max(...residences.map(res => res.id));
    return maxId + 1; // Generate the next ID
  }

  onSubmit() {
    if (this.residenceForm.valid) {
      const newResidence: Residence = this.residenceForm.value;
      this.residenceService.addResidence(newResidence);
      this.router.navigate(['/residences']);
    }
  }
}