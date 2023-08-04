import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-add-mou',
  templateUrl: './add-mou.component.html',
  styleUrls: ['./add-mou.component.css']
})
export class AddMouComponent {

  title: string;
  collegeName: string;
  imageFile: string;
  modelFile:string
  selectedFile: File | null = null;
  base64Image: string | null = null;
  base64Model: string | null = null;

  MouForm: FormGroup;

  constructor(private service: SharedService) {
    this.MouForm = new FormGroup({
      title: new FormControl('Test', Validators.required),
      collegeName: new FormControl('check', Validators.required),
      image_file: new FormControl('', Validators.required),
      model_file: new FormControl('', Validators.required)
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
      } else if (fileType === 'model') {
        this.base64Model = reader.result as string;
      }
    };
    reader.readAsDataURL(file);
  }

  onSubmit(): void {
    if (this.base64Image && this.base64Model) {
      const title = this.MouForm.get('title')?.value;
      const description = this.MouForm.get('collegeName')?.value;

      this.service
        .addMou(title, description, this.base64Image,this.base64Model)
        .subscribe(
          response => {
            alert('added data');
            this.onReset();
          },
          error => {
            alert(`Failed to upload record :${error}`);
          }
        );
    }
  }
  
  
  onReset() {
    this.MouForm.reset();
  }
}
