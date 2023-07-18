import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactDetailsListComponent } from './contact-details-list.component';

describe('ContactDetailsListComponent', () => {
  let component: ContactDetailsListComponent;
  let fixture: ComponentFixture<ContactDetailsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactDetailsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactDetailsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
