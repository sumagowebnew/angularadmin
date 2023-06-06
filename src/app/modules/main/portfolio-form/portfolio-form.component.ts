import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-portfolio-form',
  templateUrl: './portfolio-form.component.html',
  styleUrls: ['./portfolio-form.component.css']
})
export class PortfolioFormComponent implements OnInit {
  portfolioForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.portfolioForm = this.formBuilder.group({
      title: ['', Validators.required],
      file: [null, Validators.required]
    });
  }

  onSubmit() {
    if (this.portfolioForm.invalid) {
      return;
    }

    // Process the form submission
    console.log(this.portfolioForm.value);
    // You can send the form data to the server or perform any other necessary actions here
  }

  onReset() {
    this.portfolioForm.reset();
  }
}