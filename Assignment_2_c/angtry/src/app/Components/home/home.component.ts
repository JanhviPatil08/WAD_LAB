import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  username: string = '';
  email: string = '';

  constructor() { }

  ngOnInit(): void {
   
    const userData = JSON.parse(localStorage.getItem('formData') || '{}');
   
    this.username = userData.username;
    this.email = userData.email;
  }
}
