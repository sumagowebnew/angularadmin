import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SharedService } from 'src/app/services/shared.service';
@Component({
  selector: 'app-add-certification',
  templateUrl: './add-certification.component.html',
  styleUrls: ['./add-certification.component.css']
})
export class AddCertificationComponent {
  certificateForm: FormGroup;
  selectedFile: File | null = null;
  base64Image: string | null = null;
  base64Model: string | null = null;
  imageFile: string;
  modelFile:string

  constructor(private formBuilder: FormBuilder,private service:SharedService ) {
    this.certificateForm = this.formBuilder.group({
      title: new FormControl('Test', Validators.required),
      college_name: new FormControl('check', Validators.required),
      image_file: new FormControl('', Validators.required),
      model_File: new FormControl('', Validators.required)
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
  
  onSubmit() {
    if (this.certificateForm.valid) {
      const title = this.certificateForm.get('title')?.value;
      const collegeName = this.certificateForm.get('college_name')?.value;

      this.service.addCertificate(title, collegeName, this.base64Image,this.base64Model)
        .subscribe(
          response => {
            alert("success on adding it")
          },
          error => {
            // Handle error response
            console.log(error)
          }
        );
    }
  }

  
  
  onReset() {
    this.certificateForm.reset();
  }
}

