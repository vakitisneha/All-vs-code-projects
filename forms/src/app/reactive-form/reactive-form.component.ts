0import { Component,OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit{

  loginForm:any;
  constructor(private fb:FormBuilder){}
  ngOnInit(): void {
      console.log(this.fb);
      this.loginForm=this.fb.group({
        username:["India",[Validators.required,Validators.email]],
        password:["",Validators.required],
        //this.loginForm=new FormGroup
       // username:new FormControl(),
       // password:new FormBuildermControl(),
      });
      console.log(this.loginForm);
  }

onFormSubmit(){
 console.log(this.loginForm);
 this.loginForm.patchValue({
  username:'sneha'
 })
}
}
