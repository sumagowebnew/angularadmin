import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-add-admin-team',
  templateUrl: './add-admin-team.component.html',
  styleUrls: ['./add-admin-team.component.scss']
})
export class AddAdminTeamComponent {
  designations:any[] =[]
  AdminTeamDetails: FormGroup;
  selectedFile: File | null = null;
  base64Image: string | null = null;

  constructor(private service: SharedService) {
    this.AdminTeamDetails = new FormGroup({
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
      const name = this.AdminTeamDetails.get('name')?.value;
      const qualification = this.AdminTeamDetails.get('qualification')?.value;
      const designation_id = this.AdminTeamDetails.get('designation_id')?.value;
      const experience = this.AdminTeamDetails.get('experience')?.value;
      
      this.service
        .addAdminTeam(name, designation_id,qualification,experience, this.base64Image)
        .subscribe(
          response => {
            console.log('Details uploaded successfully:', response);
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

}
