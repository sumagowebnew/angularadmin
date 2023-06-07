import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-add-awards',
  templateUrl: './add-awards.component.html',
  styleUrls: ['./add-awards.component.scss']
})
export class AddAwardsComponent {
  fileForm = new FormGroup({
    fileInput: new FormControl('',Validators.required)
  });
  imageUrl: string | null = null; // Declare imageUrl property


  @ViewChild('fileInput') fileInput: ElementRef<HTMLInputElement> | undefined;

  constructor (private http: HttpClient,private imageService:ImageService) { }

  onUpload(): void {
    const fileInput = this.fileInput?.nativeElement;
    if (fileInput && fileInput.files && fileInput.files[0]) {
      const file = fileInput.files[0];
      this.imageService.convertImageToBase64(file, (base64String, error) => {
        if (error) {
          console.error(error);
        } else {
          this.imageService.saveImageToServer(base64String);
        }
      });
    }
  }
 
  onReset(): void {
    this.fileForm.reset();
    this.imageUrl = null;
  }
}
