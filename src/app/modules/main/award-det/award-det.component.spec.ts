import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwardDetComponent } from './award-det.component';

describe('AwardDetComponent', () => {
  let component: AwardDetComponent;
  let fixture: ComponentFixture<AwardDetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AwardDetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AwardDetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
