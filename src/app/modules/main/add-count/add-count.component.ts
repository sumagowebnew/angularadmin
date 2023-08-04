import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-add-count',
  templateUrl: './add-count.component.html',
  styleUrls: ['./add-count.component.scss']
})
export class AddCountComponent {

  countForm: FormGroup; 
  constructor(private service:SharedService,private formBuilder: FormBuilder){
    this.countForm = this.formBuilder.group({
      clients: [null, [Validators.required, Validators.min(0)]], // Set up form controls with initial value and validation rules
      projects: [null, [Validators.required, Validators.min(0)]],
      cupOfCoffee: [null, [Validators.required, Validators.min(0)]],
      awards: [null, [Validators.required, Validators.min(0)]],
    });
  }
  addCount(){
    if (this.countForm.valid) {
      const formData = this.countForm.value;
      alert('Record Added')
      this.countForm.reset()
    } else {
      alert(`Failed to upload record`);
    }
  }
}
