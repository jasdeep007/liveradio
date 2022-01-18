import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RapidtrasnformationaltherapyComponent } from './rapidtrasnformationaltherapy.component';

describe('RapidtrasnformationaltherapyComponent', () => {
  let component: RapidtrasnformationaltherapyComponent;
  let fixture: ComponentFixture<RapidtrasnformationaltherapyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RapidtrasnformationaltherapyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RapidtrasnformationaltherapyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
