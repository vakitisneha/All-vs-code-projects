import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route,RouterModule,Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SalesComponent } from './sales/sales.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


const router:Routes=[
  {
    path:"",component:LoginComponent
  },
  {
    path:"login",component:LoginComponent
  },{
    path:"home",component:HomeComponent
  },
  {
    path:"home/:id",component:SalesComponent
  },
  {
  path:"**",component:PagenotfoundComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SalesComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(router)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
