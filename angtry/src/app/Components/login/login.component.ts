import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private router:Router){}

  username:string='';
  password:string='';

  onSubmit(){
    const userData = JSON.parse(localStorage.getItem('formData') || '{}');
    console.log(userData)

    if(this.username === userData.username && this.password === userData.password){
      this.router.navigate(['home'])
    }
    else {
      alert("Please check your login credentials")
    }
      
  }
}
