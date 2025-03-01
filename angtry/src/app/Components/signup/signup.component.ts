import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  constructor(private router:Router){}

  email:string='janhvi@gmail.com';

  formData={
    username:'',
    email:'',
    password:''
  };

  onSubmit(){
    localStorage.setItem('formData',JSON.stringify(this.formData));

    this.formData={
      username:'',
      email:'',
      password:''
    };

    this.router.navigate(['login'])
  }
}
