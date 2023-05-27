import { Component, OnInit } from '@angular/core';
import { studentservice } from './studentservice';
import { student } from 'src/student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'servietask';
  students:student[];
  ss;
  constructor(private _ssobj:studentservice){
    this.students=[];
    this.ss=_ssobj;
  }
  ngOnInit(): void {
    
  }
  getstudentsData(){
    this.students=this.ss.getstudentsData();
  }
}
