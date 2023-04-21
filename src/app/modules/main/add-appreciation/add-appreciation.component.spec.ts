import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAppreciationComponent } from './add-appreciation.component';

describe('AddAppreciationComponent', () => {
  let component: AddAppreciationComponent;
  let fixture: ComponentFixture<AddAppreciationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAppreciationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAppreciationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
