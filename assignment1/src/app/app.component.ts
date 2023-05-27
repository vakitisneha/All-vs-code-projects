import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment1';
  page="Login Page";
  status="all good";
  login($event:any):void
  {
    console.log("event filled")
    alert("your login was submit");
  }
  
}
