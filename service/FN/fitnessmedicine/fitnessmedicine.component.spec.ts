import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitnessmedicineComponent } from './fitnessmedicine.component';

describe('FitnessmedicineComponent', () => {
  let component: FitnessmedicineComponent;
  let fixture: ComponentFixture<FitnessmedicineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FitnessmedicineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FitnessmedicineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
