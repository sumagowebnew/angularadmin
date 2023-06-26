  import { Component, OnInit } from '@angular/core';
  import { FormGroup, FormBuilder, Validators } from '@angular/forms';
  import { SharedService } from 'src/app/services/shared.service';

  @Component({
    selector: 'app-development-form',
    templateUrl: './development-form.component.html',
    styleUrls: ['./development-form.component.scss']
  })
  export class DevelopmentFormComponent implements OnInit {
    form: FormGroup;
    designations: any[] = [];
  
    constructor(
      private formBuilder: FormBuilder,
      private developmentTeamService: SharedService
    ) { }
  
    ngOnInit(): void {
      this.buildForm();
      this.getDesignations()
    }
  
    buildForm(): void {
      this.form = this.formBuilder.group({
        name: ['', Validators.required],
        image: [''],
        designation: ['', Validators.required],
        qualification: [''],
        experience: ['', Validators.required],
        status: [false, Validators.required]
      });
    }
  
    onFileChange(event: any): void {
      const file = event.target.files[0];
      this.convertToBase64(file);
    }
  
    convertToBase64(file: File): void {
      const reader = new FileReader();
      reader.onloadend = () => {
        this.form.patchValue({
          image: reader.result
        });
      };
      reader.readAsDataURL(file);
    }
  
    onSubmit(): void {
      if (this.form.valid) {
        this.developmentTeamService.addDevelopmentTeam(this.form.value).subscribe(
          response => {
            console.log('Development team added successfully', response);
            this.form.reset();
          },
          error => {
            console.error('Failed to add development team', error);
            // Handle error response
          }
        );
      } else {
        // Handle form validation errors
      }
    }

    getDesignations(): void {
      this.developmentTeamService.getDesignations().subscribe(
        response => {
          this.designations = response.data;
        },
        error => {
          console.error('Failed to get designations', error);
        }
      );
    }
  
  }
