import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SharedService } from 'src/app/services/shared.service';

interface Portfolio{
  title:string;
  description:string;
  website_link:string;
  image_file:string;
}

@Component({
  selector: 'app-portfolio-form',
  templateUrl: './portfolio-form.component.html',
  styleUrls: ['./portfolio-form.component.css']
})
export class PortfolioFormComponent implements OnInit {
  PortfolioForm: FormGroup;
  selectedFile: File | null = null;
  base64Image: string | null = null;

  constructor(private service: SharedService) {
    this.PortfolioForm = new FormGroup({
      title: new FormControl('Test', Validators.required),
      description: new FormControl('check', Validators.required),
      websitelink: new FormControl('https://', Validators.required),
      image_file: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {}

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
    this.convertToBase64();
  }

  convertToBase64(): void {
    const reader = new FileReader();
    reader.onload = () => {
      this.base64Image = reader.result as string;
      console.log(this.base64Image);
    };
    reader.readAsDataURL(this.selectedFile);
  }

  onSubmit(): void {
    if (this.base64Image) {
      const title = this.PortfolioForm.get('title')?.value;
      const description = this.PortfolioForm.get('description')?.value;
      const websiteLink = this.PortfolioForm.get('websitelink')?.value;

      this.service
        .addPortfolio(title, description, websiteLink, this.base64Image)
        .subscribe(
          response => {
            console.log('Portfolio uploaded successfully:', response);
          },
          error => {
            console.error('Failed to upload Portfolio:', error);
          }
        );
    }
  }

}