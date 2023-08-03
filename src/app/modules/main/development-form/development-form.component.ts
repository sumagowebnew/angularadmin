  import { Component, OnInit } from '@angular/core';
  import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
  import { SharedService } from 'src/app/services/shared.service';

  @Component({
    selector: 'app-development-form',
    templateUrl: './development-form.component.html',
    styleUrls: ['./development-form.component.scss']
  })
  export class DevelopmentFormComponent implements OnInit {
  designations:any[] =[]
    TeamDetailsForm: FormGroup;
    selectedFile: File | null = null;
    base64Image: string | null = null;
  
    constructor(private service: SharedService) {
      this.TeamDetailsForm = new FormGroup({
        name: new FormControl('', Validators.required),
        qualification: new FormControl('', Validators.required),
        designation_id: new FormControl('', Validators.required),
        image: new FormControl('', Validators.required),
        experience: new FormControl('',Validators.required)
      });
    }
  
    ngOnInit(): void {
      this.getDesignations()
    }
  
    onFileSelected(event: any): void {
      this.selectedFile = event.target.files[0];
      this.convertToBase64();
    }
  
    convertToBase64(): void {
      const reader = new FileReader();
      reader.onload = () => {
        this.base64Image = reader.result as string;
        console.log(this.base64Image);
      };
      reader.readAsDataURL(this.selectedFile);
    }
  
    onSubmit(): void {
      if (this.base64Image) {
        const name = this.TeamDetailsForm.get('name')?.value;
        const qualification = this.TeamDetailsForm.get('qualification')?.value;
        const designation_id = this.TeamDetailsForm.get('designation_id')?.value;
        const experience = this.TeamDetailsForm.get('experience')?.value;
        
        this.service
          .addDevelopmentTeam(name, designation_id,qualification,experience, this.base64Image)
          .subscribe(
            response => {
              console.log('Details uploaded successfully:', response);
              alert('Data Added Successfully')
              this.TeamDetailsForm.reset()
            },
            error => {
              console.error('Failed to upload Details:', error);
            }
          );
      }
    }
  

    getDesignations(): void {
      this.service.getDesignations().subscribe(
        response => {
          this.designations = response.data;
        },
        error => {
          console.error('Failed to get designations', error);
        }
      );
    }

    onReset(){
      this.TeamDetailsForm.reset()
    }
  
  }
