import { Component,OnInit} from '@angular/core';
import { FormBuilder,FormGroup,NgForm,Validators } from '@angular/forms';

import { Router } from '@angular/router';
//import { Loginservice } from '../loginservice';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{


  loginForm!: FormGroup;
  constructor(private fb:FormBuilder,private route:Router) { }
  ngOnInit(): void {
    console.log(this.fb);
    this.loginForm=this.fb.group({
      Username:["",[Validators.required,Validators.email]],
      password:["",[Validators.required]]
    });
  }
  onFormSubmit(){
  // if(this.refernceForForm.value.Username ==="user@123" && this.refernceForForm.value.password==='user'){
  //   this.route.navigate(['get']);
  // }

  this.route.navigate(['add']);
}

}
