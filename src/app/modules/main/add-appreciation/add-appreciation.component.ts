import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { SharedService } from 'src/app/services/shared.service';
 @Component({
  selector: 'app-add-appreciation',
  templateUrl: './add-appreciation.component.html',
  styleUrls: ['./add-appreciation.component.scss']
})
export class AddAppreciationComponent {
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

  uploadAppreciation(): void {
    if (this.base64Image) {
      this.service.addAppreciation(this.base64Image).subscribe(
        response => {
          console.log('Appreciation uploaded successfully:', response);
          this.onReset()
        },
        error => {
          console.error('Failed to upload Appreciation:', error);
          alert('empty')
        }
      );
    }
  }

  onReset(){
    this.fileForm.reset() 
  }

}
