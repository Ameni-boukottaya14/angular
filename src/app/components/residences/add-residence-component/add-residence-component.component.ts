import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-residence-component',
  templateUrl: './add-residence-component.component.html',
  styleUrls: ['./add-residence-component.component.css']
})
export class AddResidenceComponent implements OnInit {
  residenceForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.residenceForm = this.fb.group({
      id: [''],
      name: ['', [Validators.required, Validators.minLength(3)]],
      address: ['', Validators.required],
      image: ['', [Validators.required, Validators.pattern('https?://.+')]],
      status: ['Disponible'],
      apartments: this.fb.array([]),
    });
  }
  onSubmit() {
    if (this.residenceForm.valid) {
      console.log(this.residenceForm.value);
    }
  }
}
