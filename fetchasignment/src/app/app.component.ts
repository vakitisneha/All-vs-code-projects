import { Component,OnInit } from '@angular/core';
import { DataService } from './dataservice';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'fetchasignment';
  data:any=null;
  searchData:any=null;
  target:any=null;


  constructor(private ds:DataService){
   
  }
  ngOnInit() {
    return this.ds.getdata().subscribe((x)=>{this.data=x})
  }
  deleteData(n:any){
    this.data.splice(n,1);
  }
  search(){
    this.searchData=this.data.filter((x:{id:any;})=>x.id==this.target)
  return this.searchData;
}
}
