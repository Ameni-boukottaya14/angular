import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddResidenceComponentComponent } from './add-residence-component.component';

describe('AddResidenceComponentComponent', () => {
  let component: AddResidenceComponentComponent;
  let fixture: ComponentFixture<AddResidenceComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddResidenceComponentComponent]
    });
    fixture = TestBed.createComponent(AddResidenceComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
