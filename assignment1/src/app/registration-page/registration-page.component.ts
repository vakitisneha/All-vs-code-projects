import { Component } from '@angular/core';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent {

Submit($event:any):void
  {
    console.log("event filled")
    alert("your registration  was submited successfully");
  }
}
