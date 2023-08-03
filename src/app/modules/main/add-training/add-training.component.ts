import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-add-training',
  templateUrl: './add-training.component.html',
  styleUrls: ['./add-training.component.scss']
})
export class AddTrainingComponent {

  trainingForm = new FormGroup({
    fileInput: new FormControl('', Validators.required)
  });

  constructor(private service:SharedService) { }

  selectedFile: File | null = null;
  base64Image: string | null = null;

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
    this.convertToBase64();
  }

  convertToBase64(): void {
    const reader = new FileReader();
    reader.onload = () => {
      this.base64Image = reader.result as string;
      console.log(this.base64Image)
    };
    reader.readAsDataURL(this.selectedFile);
  }

  uploadTraining(): void {
    if (this.base64Image) {
      this.service.addTraining(this.base64Image).subscribe(
        response => {
          console.log('Training Image uploaded successfully:', response);
          alert("Successfully Record Added")
          this.onReset()
        },
        error => {
          console.error('Failed to upload Training Image:', error);
        }
      );
    }
  }


  onReset() {
    this.trainingForm.reset();
  }
}