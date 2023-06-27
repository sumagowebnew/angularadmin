import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SharedService } from 'src/app/services/shared.service';
@Component({
    selector: 'app-add-achievements',
    templateUrl: './add-achievements.component.html',
    styleUrls: ['./add-achievements.component.scss']
  })
  export class AddAchievementsComponent implements OnInit {
    achievementsForm: FormGroup;
  
    constructor(private formBuilder: FormBuilder,private service:SharedService) {
      this.achievementsForm = new FormGroup({
        title: new FormControl('', Validators.required),
        images: new FormControl('', Validators.required),

      });
    }

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

  
    ngOnInit() {}
  
    onSubmit() {
      if (this.achievementsForm.valid) {
        const title = this.achievementsForm.get('title')?.value
        this.service.addAchievements(title,this.base64Image).subscribe((res)=>
        {
          alert('Added Achievemetns');
        }),err=>{
          console.log(err)
        }
      }
  
    }
  
    onReset() {
      this.achievementsForm.reset();
    }
  }