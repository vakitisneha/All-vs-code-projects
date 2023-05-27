import { Component, OnInit } from '@angular/core';
import { product } from './product';
import { productservice } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'sharedservice';
  products:product[];
  ps;

  constructor(private _psobj:productservice){
    this.ps=new productservice();
    this.products=[];
  }
  getproducts(){
    this.products=this.ps.getproducts();
  }
  ngOnInit(): void {
    
  }
}
