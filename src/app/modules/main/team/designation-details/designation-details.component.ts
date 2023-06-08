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
      date: ['23/05/2023', Validators.required]
    });
    
  }
  editAction() {
    const srNoControl = this.designationForm.get('srNo');
    const designationControl = this.designationForm.get('designation');
    
    if (srNoControl.valid && designationControl.valid) {
      const srNoValue = srNoControl.value;
      const designationValue = designationControl.value;
      
      console.log(`Edit action triggered for Serial Number: ${srNoValue}`);
      console.log(`New designation value: ${designationValue}`);
    } else {
      console.log('Invalid form data. Please correct the required fields.');
    }
  }
  deleteAction() {
    const srNoControl = this.designationForm.get('srNo');
    
    if (srNoControl.valid) {
      const srNoValue = srNoControl.value;
      
      console.log(`Delete action triggered for Serial Number: ${srNoValue}`);
      
      this.designationForm.reset();
    } else {
      console.log('Invalid Serial Number. Please enter a valid value.');
    }
  }

  
  onSubmit() {
    if (this.designationForm.valid) {
      console.log(this.designationForm.value);
    }
  }
}
