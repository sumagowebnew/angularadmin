import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SharedService } from 'src/app/services/shared.service';


@Component({
  selector: 'app-birthday-form',
  templateUrl: './birthday-form.component.html',
  styleUrls: ['./birthday-form.component.scss']
})
export class BirthdayFormComponent  {
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

  uploadBirthday(): void {
    if (this.base64Image) {
      this.service.addBirthday(this.base64Image).subscribe(
        response => {
          console.log('Birthday Data uploaded successfully:', response);
          alert('bday added')
          this.onReset()
        },
        error => {
          console.error('Failed to upload birthday data:', error);
        }
      );
    }
  }
  onReset(): void {
    this.fileForm.reset();
    this.selectedFile = null;
  }
}
