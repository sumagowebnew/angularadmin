import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-training',
  templateUrl: './add-training.component.html',
  styleUrls: ['./add-training.component.scss']
})
export class AddTrainingComponent implements OnInit {
  trainingForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.trainingForm = this.formBuilder.group({
      title: ['', Validators.required],
      file: [null, Validators.required]
    });
  }

  onSubmit() {
    if (this.trainingForm.invalid) {
      return;
    }

    // Process the form submission
    console.log(this.trainingForm.value);
    // You can send the form data to the server or perform any other necessary actions here
  }

  onReset() {
    this.trainingForm.reset();
  }
}