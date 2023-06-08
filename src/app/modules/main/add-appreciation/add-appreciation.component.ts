import { Component, ElementRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { ImageService } from 'src/app/services/image.service';
 @Component({
  selector: 'app-add-appreciation',
  templateUrl: './add-appreciation.component.html',
  styleUrls: ['./add-appreciation.component.scss']
})
export class AddAppreciationComponent {
  fileForm = new FormGroup({
    fileInput: new FormControl('',Validators.required)
  });

  @ViewChild('fileInput') fileInput: ElementRef<HTMLInputElement> | undefined;

  constructor(private http: HttpClient,private imageService:ImageService) { }

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


}
