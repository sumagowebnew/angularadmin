import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingDetComponent } from './training-det.component';

describe('TrainingDetComponent', () => {
  let component: TrainingDetComponent;
  let fixture: ComponentFixture<TrainingDetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingDetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainingDetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
