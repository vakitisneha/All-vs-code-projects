import { Component } from '@angular/core';
import { DataService } from './dataservice';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';
  constructor(private ds:DataService){ 
  this.ds.getData().subscribe(x=>console.log(x));
  }
}
