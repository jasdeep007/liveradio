import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubepopupComponent } from './youtubepopup.component';

describe('YoutubepopupComponent', () => {
  let component: YoutubepopupComponent;
  let fixture: ComponentFixture<YoutubepopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YoutubepopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutubepopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
