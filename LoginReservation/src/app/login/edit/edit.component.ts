import { Component ,Input,OnInit,Inject} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {  MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Loginservice } from 'src/app/loginservice';
import { Serializer } from '@angular/compiler';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{
  @Input() res:any;
  Slno:number|any;
  Hotel!:string;
  Arrival!:string;
  Departure!:string;
  Type!: string;
  Guests!:number;
  Price!:number;
  reserveForm:any
  
  onSubmit(){
    console.warn(this.reserveForm.value);
  }

constructor(private edit:MatDialogRef<EditComponent>,private service:Loginservice,@Inject(MAT_DIALOG_DATA) public data:any){}


ngOnInit(): void
{
 this.reserveForm=new FormGroup({
  Slno:new FormControl(''),
  Hotel:new FormControl(''),
  Arrival:new FormControl(''),
  Departure:new FormControl(''),
  Type:new FormControl(''),
  Guests:new FormControl(''),
  Price:new FormControl('')
});
if(this.data){
let Adate = this.data.Arrival.split('T');
      let Ddate = this.data.Departure.split('T');
      this.reserveForm.patchValue({
        Slno: this.data.Slno,
        Hotel: this.data.Hotel,
        Arrival: Adate[0],
        Departure: Ddate[0],
        Type: this.data.Type,
        Guests: this.data.Guests,
        Price: this.data.Price,
      });
    }
}
onClose(){
  this.edit.close();
  }

addList(){
  console.log(Serializer);
  let ser=JSON.stringify(this.reserveForm.value);
  this.service.create(ser);
  window.location.reload();
}
clear(){
  console.log("ok")
}
onFormSubmit(){
  
}
 }

    
    
   
 


 
