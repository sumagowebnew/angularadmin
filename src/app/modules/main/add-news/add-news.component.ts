import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.scss']
})
export class AddNewsComponent {
  title: string;
  newsPaper: string;
  imageFile: string;
  modelFile:string
  selectedFile: File | null = null;
  base64Image: string | null = null;
  base64Model: string | null = null;

  NewsForm: FormGroup;

  constructor(private service: SharedService) {
    this.NewsForm = new FormGroup({
      title: new FormControl('Test', Validators.required),
      newsPaper: new FormControl('check', Validators.required),
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
      const title = this.NewsForm.get('title')?.value;
      const description = this.NewsForm.get('newsPaper')?.value;

      this.service
        .addNews(title, description, this.base64Image,this.base64Model)
        .subscribe(
          response => {
            console.log('News uploaded successfully:', response);
          },
          error => {
            console.error('Failed to upload News:', error);
          }
        );
    }
  }

}
