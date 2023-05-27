import { Component,OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { Loginservice } from 'src/app/loginservice';
import { DeleteComponent } from '../delete/delete.component';

import { EditComponent } from '../edit/edit.component';

export interface Reservation{
 
  Slno:number;
  Hotel:string;
  Arrival:Date;
  Departure:Date;
  Type:string;
  Guests:number;
  Price:number;
  Manage:string;
}

const ELEMENT_DATA: Reservation[] = [ ];

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit{
  


displayedColumns: string[] = ['Slno','Hotel','Arrival','Departure','Type','Guests','Price','Manage'];
dataSource = ELEMENT_DATA;
element:any;

// gets:any[]=[];
constructor(private edit:MatDialog, private res:Loginservice,private pos:Loginservice,private route:Router){}
ngOnInit(): void {
  this.res.getdata().subscribe(re=>{this.element=re;})
}
openAdd(){
  this.edit.open(EditComponent,{
    height:'70%',
    width:'50%',
  }) ; 
}
openEdit(value:number){
	this.edit.open(EditComponent,{
		height:"60%",
		width:"60",
    data:value
	});

}
openDelete(value:any){
	this.edit.open(DeleteComponent,{
		height:"30%",
		width:"90",
    data:value
	});
}
logout(){
  this.route.navigate(['']);
}
}

  
   
     
  