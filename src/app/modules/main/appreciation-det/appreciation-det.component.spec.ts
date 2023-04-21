import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppreciationDetComponent } from './appreciation-det.component';

describe('AppreciationDetComponent', () => {
  let component: AppreciationDetComponent;
  let fixture: ComponentFixture<AppreciationDetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppreciationDetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppreciationDetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
