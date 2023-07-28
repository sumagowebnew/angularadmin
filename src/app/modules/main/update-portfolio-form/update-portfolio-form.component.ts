import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';

interface Portfolio{
  title:string;
  description:string;
  website_link:string;
  image_file:string;
}

@Component({
  selector: 'app-update-portfolio-form',
  templateUrl: './update-portfolio-form.component.html',
  styleUrls: ['./update-portfolio-form.component.scss']
})
export class UpdatePortfolioFormComponent implements OnInit {
  portfolioId: number;
  portfolio: Portfolio;
  PortfolioForm: FormGroup;
  selectedFile: File | null = null;
  base64Image: string | null = null;
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.portfolioId = params['id'];
      console.log(this.portfolioId);
      
    });
  }

  constructor(private route: ActivatedRoute,private service:SharedService){
    this.PortfolioForm = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      websitelink: new FormControl('', Validators.required),
      image_file: new FormControl('', Validators.required)
    });
  }


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
        .updatePortfolio(this.portfolioId,title, description, websiteLink, this.base64Image)
        .subscribe(
          response => {
            console.log('Portfolio uploaded successfully:', response);
            this.PortfolioForm.reset()
          },
          error => {
            console.error('Failed to upload Portfolio:', error);
          }
        );
    }
  }


}
