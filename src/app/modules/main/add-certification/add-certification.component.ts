import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-certification',
  templateUrl: './add-certification.component.html',
  styleUrls: ['./add-certification.component.css']
})
export class AddCertificationComponent implements OnInit {
  certificateForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.certificateForm = this.formBuilder.group({
      title: ['', Validators.required],
      file: [null, Validators.required]
    });
  }

  onSubmit() {
    if (this.certificateForm.invalid) {
      return;
    }

    // Process the form submission
    console.log(this.certificateForm.value);
    // You can send the form data to the server or perform any other necessary actions here
  }

  onReset() {
    this.certificateForm.reset();
  }
}

