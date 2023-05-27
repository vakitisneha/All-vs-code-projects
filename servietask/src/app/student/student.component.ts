import { Component,OnInit } from '@angular/core';
import { studentservice } from '../studentservice';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
  providers:[studentservice]
})
export class StudentComponent implements OnInit{
  ngOnInit(): void {}
  dataFetchedFromService:any;
  nameEnteredByStudent:any;
  finalResult:any;
  constructor(private studentservice:studentservice){ }

  datafilteredFromServiceForStudentData(){
    this.finalResult=this.studentservice.getstudentsData().filter((result)=>{return result.name===this.nameEnteredByStudent;});
    console.log(this.finalResult);
  }

}
