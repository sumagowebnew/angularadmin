import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.scss']
})
export class AddServiceComponent implements OnInit {
  formGroup: FormGroup;
  selectedFile: File | null = null;
  base64Image: string | null = null;

  constructor(private formBuilder: FormBuilder,private sharedService:SharedService,private route: ActivatedRoute) { }

  
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

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.formGroup = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      image: [''] // You can add validators for image input if needed
    });
  }

  onSubmit() {
    if (this.formGroup.valid) {
      const title = this.formGroup.get('title')?.value;
      const description = this.formGroup.get('description')?.value;
      const image = this.formGroup.get('image')?.value;

      this.sharedService.addService(title,description,this.base64Image).subscribe((res)=>{
        console.log('success on adding',res)
      })
    }
    else{
      console.log("errorr")
    }
  }

  onReset() {
    this.formGroup.reset();
  }

}
