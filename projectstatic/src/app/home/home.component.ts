import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  data=[
    {id:1,name:'sneha'},
    {id:2,name:'deepthi'}
  ]
  constructor(private router:Router){}
 ngOnInit(): void {
   
 }
  onClick(a:any){
    console.log(a);
    this.router.navigate(['home',a.id])
  }
}
