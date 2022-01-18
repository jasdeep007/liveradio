import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmotionallyimaginativetherapyComponent } from './emotionallyimaginativetherapy.component';

describe('EmotionallyimaginativetherapyComponent', () => {
  let component: EmotionallyimaginativetherapyComponent;
  let fixture: ComponentFixture<EmotionallyimaginativetherapyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmotionallyimaginativetherapyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmotionallyimaginativetherapyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
