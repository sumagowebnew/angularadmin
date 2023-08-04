import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-add-vancancy',
  templateUrl: './add-vancancy.component.html',
  styleUrls: ['./add-vancancy.component.scss']
})
export class AddVancancyComponent {
  vacancyForm: FormGroup;
  locations: string[] = ['Pune','Nashik', 'USA'];
  branches: string[] = ['Development', 'Marketing', 'Designers', 'Management'];


  constructor(
    private apiService: SharedService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initVacancyForm();
  }

  initVacancyForm(): void {
    this.vacancyForm = this.formBuilder.group({
      position: ['', Validators.required],
      experience: ['', Validators.required],
      location: ['', Validators.required],
      branch: ['', Validators.required],
      qualification: ['', Validators.required]
    });
  }

  addVacancy(): void {
    if (this.vacancyForm.invalid) {
      return;
    }

    const { position, experience, location, branch, qualification } = this.vacancyForm.value;
    this.apiService.addVacancy(position, experience, location, branch, qualification)
      .subscribe(res => {
        // Handle success response
        console.log('Vacancy added successfully:', res);
        alert("successfully added vacancy");
        this.onReset()
      }, error => {
        // Handle error response
        console.error('Failed to add vacancy:', error);
      });
  }
  onReset() {
    this.vacancyForm.reset();
  }
}
