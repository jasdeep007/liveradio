import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitnessnutritionComponent } from './fitnessnutrition.component';

describe('FitnessnutritionComponent', () => {
  let component: FitnessnutritionComponent;
  let fixture: ComponentFixture<FitnessnutritionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FitnessnutritionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FitnessnutritionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
