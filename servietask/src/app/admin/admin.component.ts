import { Component, OnInit } from '@angular/core';
import { studentservice } from '../studentservice';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit{
  studentlist:any;
  isClicked:boolean=false;
  isNamesClicked:boolean=false;
  nameonButton:string='fetch stuents details';
  messageBeforeClicked:string='click here to fetch data';

  constructor(private studentdata:studentservice){}
  
  ngOnInit(): void {
    
  }
  onClick(){
    this.studentlist=this.studentdata.getstudentsData();
    this.isClicked=!this.isClicked;
    
    if(this.nameonButton==='fetch students details')
    {
      this.nameonButton='hide student details';
    }else{
      this.nameonButton='hide student details';
    }
  }
}
