import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Forgot } from './forgot.model';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {
  forgotPasswordForm: FormGroup;
  passworddata:Forgot[];

  constructor(private fb:FormBuilder){
    this.forgotPasswordForm = this.fb.group({
      password: ['', [Validators.required]]
    });

    this.passworddata = []

  }

  onSubmit(){
    let password:Forgot ={  
      password:this.Password.value

    }
    this.forgotPasswordForm
    console.log("Changed Password is ",this.forgotPasswordForm.value.password)
  }

  get Password (): FormControl {
    return this.forgotPasswordForm.get('password') as FormControl;
  }
  // onReset() {
  //   this.forgotPasswordForm.reset();
  // }

}
