import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SharedService } from 'src/app/services/shared.service';
@Component({
    selector: 'app-add-achievements',
    templateUrl: './add-achievements.component.html',
    styleUrls: ['./add-achievements.component.scss']
  })
  export class AddAchievementsComponent {
    title: string;
    images: string[] = []; // Array to store base64 encoded images
    PortfolioForm
    @ViewChild('portfolioFormRef', { static: true }) portfolioFormRef: NgForm;
  
    constructor(private postmanPaiService: SharedService) {}
  
    onFileSelected(event: any) {
      const file = event.target.files[0];
  
      if (file) {
        const reader = new FileReader();
  
        reader.onload = (e: any) => {
          this.images.push(e.target.result);
        };
  
        reader.readAsDataURL(file);
      }
    }
  
    onSubmit() {
      const formData = new FormData();
      formData.append('title', this.title);
  
      for (let i = 0; i < this.images.length; i++) {
        formData.append('images[' + i + ']', this.images[i]);
      }
  
      this.postmanPaiService.addAchievements(formData).subscribe(
        (response) => {
          console.log('Response:', response);
            alert('Success uploading data')  
        },
        (error) => {
       alert('Error');
        }
      );
    }
    onReset() {
      this.title = '';
      this.portfolioFormRef.resetForm()
    }
  }