import { Component } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm = this.fb.group({
    
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],

  });

  constructor(private fb: NonNullableFormBuilder,private router: Router,private auth:AuthService){}

  onSubmit(){
    if (!this.loginForm.valid) {
      return;
    }
   
    // console.log(this.loginForm.value)
    const {email,password} = this.loginForm.value;
    if (!email || !password) {
      return;
    }
  
    this.auth.login(email, password).subscribe(response => {
      console.log(email,password,response);
      if(response.status == 'error'){
          console.log('error')
      }
      else{
        this.router.navigate(['main']);
      }
     
    });
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

 
}
