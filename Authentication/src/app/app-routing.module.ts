import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { auth_guard } from './auth_guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path:"",component:LoginComponent
  },
  {
    path:'home',component:HomeComponent,canActivate:[auth_guard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
