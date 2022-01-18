import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportanttopicsComponent } from './importanttopics.component';

describe('ImportanttopicsComponent', () => {
  let component: ImportanttopicsComponent;
  let fixture: ComponentFixture<ImportanttopicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportanttopicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportanttopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
