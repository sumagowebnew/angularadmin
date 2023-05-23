import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-designation-details',
  templateUrl: './designation-details.component.html',
  styleUrls: ['./designation-details.component.scss']
})
export class DesignationDetailsComponent {
  designationForm: FormGroup;
  
  constructor(private formBuilder: FormBuilder) {
    this.designationForm = this.formBuilder.group({
      srNo: ['', Validators.required],
      action: ['', Validators.required],
      designation: ['', Validators.required],
      date: ['', Validators.required]
    });
  }
  
  onSubmit() {
    if (this.designationForm.valid) {
      console.log(this.designationForm.value);
    }
  }
}
