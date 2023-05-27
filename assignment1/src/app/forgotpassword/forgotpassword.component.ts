import { Component } from '@angular/core';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent {
forgot($event:any):void
{
  console.log("your password was updated");
 alert("your password was updated ")
}
}
