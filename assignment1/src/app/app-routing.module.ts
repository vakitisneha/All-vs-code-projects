import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';

const routes: Routes = [
  {
    path:"",component:LoginpageComponent
  },
  {
    path:"registrationpage",component:RegistrationPageComponent
  },{
     path:"registrationpage",component:RegistrationPageComponent
  },
  {
    path:"forgotpassword",component:ForgotpasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
