import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SharedService } from 'src/app/services/shared.service';
@Component({
  selector: 'app-add-certification',
  templateUrl: './add-certification.component.html',
  styleUrls: ['./add-certification.component.css']
})
export class AddCertificationComponent {
  
  
  title: string;
  collegeName: string;
  imageFile: string;
  modelFile:string
  selectedFile: File | null = null;
  base64Image: string | null = null;
  base64Model: string | null = null;

  CertificateForm: FormGroup;

  constructor(private service: SharedService) {
    this.CertificateForm = new FormGroup({
      title: new FormControl('Test', Validators.required),
      collegeName: new FormControl('check', Validators.required),
      image_file: new FormControl('', Validators.required),
      modelFile: new FormControl('', Validators.required)
    });
  }

  onFileSelected(event: any, fileType: string): void {
    const file = event.target.files[0];

    if (fileType === 'image') {
      this.imageFile = file;
      this.convertToBase64(file, 'image');
    } else if (fileType === 'model') {
      this.modelFile = file;
      this.convertToBase64(file, 'model');
    }
  }

  convertToBase64(file: File, fileType: string): void {
    const reader = new FileReader();
    reader.onload = () => {
      if (fileType === 'image') {
        this.base64Image = reader.result as string;
        console.log('Image base64:', this.base64Image);
      } else if (fileType === 'model') {
        this.base64Model = reader.result as string;
        console.log('Model base64:', this.base64Model);
      }
    };
    reader.readAsDataURL(file);
  }

  onSubmit(): void {
    if (this.base64Image && this.base64Model) {
      const title = this.CertificateForm.get('title')?.value;
      const description = this.CertificateForm.get('collegeName')?.value;

      this.service
        .addCertificate(title, description, this.base64Image,this.base64Model)
        .subscribe(
          response => {
            console.log('Certificate uploaded successfully:', response);
          },
          error => {
            console.error('Failed to upload Certificate:', error);
          }
        );
    }
  }
  
  
  onReset() {
    this.CertificateForm.reset();
  }
}

