import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { studentservice } from '../studentservice';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
 username='';
 password='';
 errormessage='';
 
 //constructor(){}
 constructor(private router:Router){}
  ngOnInit(): void { }
    
  
  onclick(){
    console.log(this.username);
    
    console.log(this.password);
   
    if(this.username==='sneha',
    this.password==='sneha123'){
      this.router.navigate(['admin']);
   }else if(this.username==='sneha123',
   this.password==='sneha')
   {
    this.router.navigate(['student']);
   }else{
    this.errormessage='please enter valid credentials';
   }
    

  }
}
