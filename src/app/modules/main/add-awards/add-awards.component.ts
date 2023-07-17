import { Component, ElementRef, ViewChild, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-add-awards',
  templateUrl: './add-awards.component.html',
  styleUrls: ['./add-awards.component.scss']
})
export class AddAwardsComponent {

  fileForm = new FormGroup({
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

  uploadAward(): void {
    if (this.base64Image) {
      this.service.addAward(this.base64Image).subscribe(
        response => {
          console.log('Award uploaded successfully:', response);
        },
        error => {
          console.error('Failed to upload logo:', error);
        }
      );
    }
  }
  onReset(): void {
    this.fileForm.reset();
  }
}
