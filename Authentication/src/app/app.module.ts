import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { authservice } from './authservice';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { auth_http_interseptor } from './auth_http_interseptor';
import { HttpClientModule } from '@angular/common/http';

export function initializeApp():Promise<void>{
  console.log(initializeApp)
  return new Promise((resolve,reject)=>{
    resolve();
  });
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  // providers: [auth_guard,authservice],
  providers: [authservice,{provide:HTTP_INTERCEPTORS,useClass:auth_http_interseptor,multi:true},{provide:APP_INITIALIZER,useFactory:()=>initializeApp,deps:[],multi:true}],
  bootstrap: [AppComponent]
})

export class AppModule { }
