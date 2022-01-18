import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HypnotherapyComponent } from './hypnotherapy.component';

describe('HypnotherapyComponent', () => {
  let component: HypnotherapyComponent;
  let fixture: ComponentFixture<HypnotherapyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HypnotherapyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HypnotherapyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
