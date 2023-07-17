import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  name: string;
  email: string;
  password: string;
  constructor(private registerService:AuthService){}


  registerUser() {
    this.registerService.registerUser(this.name, this.email, this.password)
      .subscribe(response => {
        console.log('Registration successful:', response);
        // Handle success, e.g., show a success message or redirect to another page
      }, error => {
        console.error('Registration failed:', error);
        // Handle error, e.g., show an error message
      });
  }
}
