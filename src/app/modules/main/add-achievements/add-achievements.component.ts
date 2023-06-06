// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-add-achievements',
//   templateUrl: './add-achievements.component.html',
//   styleUrls: ['./add-achievements.component.scss']
// })
// export class AddAchievementsComponent {
// }
// const form = document.querySelector('#achievements-form');
// if (form) {
//   form.addEventListener('submit', (event) => {
//     event.preventDefault();
//     const title = (document.querySelector('#title') as HTMLInputElement).value;
//      const file = (document.querySelector('#file') as HTMLInputElement).value;
//     console.log('Title:', title);
//     console.log('Achievements file:', file);
//   });
// }
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
    selector: 'app-add-achievements',
    templateUrl: './add-achievements.component.html',
    styleUrls: ['./add-achievements.component.scss']
  })
  export class AddAchievementsComponent implements OnInit {
    achievementsForm: FormGroup;
  
    constructor(private formBuilder: FormBuilder) {}
  
    ngOnInit() {
      this.achievementsForm = this.formBuilder.group({
        title: ['', Validators.required],
        file: [null, Validators.required]
      });
    }
  
    onSubmit() {
      if (this.achievementsForm.invalid) {
        return;
      }
  
      // Process the form submission
      console.log(this.achievementsForm.value);
      // You can send the form data to the server or perform any other necessary actions here
    }
  
    onReset() {
      this.achievementsForm.reset();
    }
  }