import { Component,HostListener,OnInit, ViewEncapsulation} from '@angular/core';
import { Router } from '@angular/router';
import { authservice } from '../authservice';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation:ViewEncapsulation.Emulated,
  
})
export class LoginComponent implements OnInit{
  username:any;
  password:any;
  constructor(private auth:authservice,private rout:Router){

  }
  // onLogin(){
  //   this.auth.isUserAuthenticated(this.username,this.password)
  //   let token=localStorage.getItem("isUserValid")
  //   if(token){
  //     this.rout.navigate(['home'])
  //   }
  //}
  ngOnInit(): void {
    
  }
  @HostListener('click')onLogin(){
    console.log("click event fired")
  }
}
