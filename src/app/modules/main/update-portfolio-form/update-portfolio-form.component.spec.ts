import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePortfolioFormComponent } from './update-portfolio-form.component';

describe('UpdatePortfolioFormComponent', () => {
  let component: UpdatePortfolioFormComponent;
  let fixture: ComponentFixture<UpdatePortfolioFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePortfolioFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatePortfolioFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
