import { Component,OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'forms';
  loginForm!:FormGroup;
  
  ngOnInit(){
    this.loginForm=new FormGroup({
    username:new FormControl(),
    password:new FormControl()
    });
    console.log(this.loginForm);
  }
  onFormSubmit(){
    console.log(this.loginForm);
  }
  onFormSubmission(refernceForForm:any){
    console.log(refernceForForm);
    refernceForForm.reset();
    if(refernceForForm.value.username==='user@123'&&refernceForForm.value.password==='password@123'){
      alert('ok')
    }
  }
}
