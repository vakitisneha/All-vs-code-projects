import { Component, Inject,OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Loginservice } from 'src/app/loginservice';


@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit{

  closeResult: string | undefined;  
  products = [];  
  constructor(private edit:MatDialogRef<DeleteComponent>,@Inject (MAT_DIALOG_DATA) public data:any,private del:Loginservice){}
  ngOnInit(): void {
    console.log(this.data);
   
  }
  onClose(){
    console.log(this.data);
  // this.res.getDepList().subscribe(
  //   (x:any)=>{
  //     this.gets.push(...x)
}
yes(){
this.del.delete(this.data.Slno).subscribe();
window.location.reload();
}
no(){
  this.edit.close();
}

}  

