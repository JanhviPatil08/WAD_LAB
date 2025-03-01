import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './Components/signup/signup.component';
import { LoginComponent } from './Components/login/login.component';
import { HomeComponent } from './Components/home/home.component';

const routes: Routes = [
  {
    component:SignupComponent,
    path:'signup'
  },
  {
    component:LoginComponent,
    path:'login'
  },
  {
    component:HomeComponent,
    path:'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
