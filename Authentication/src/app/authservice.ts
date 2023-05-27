import { HttpClient, } from '@angular/common/http';
import{Injectable,OnInit} from '@angular/core'


@Injectable({
    providedIn:'root'
})
export class authservice implements OnInit{
    username="sneha";
    password="sneha123";
    isUserLogin:boolean=false;
    constructor(private http:HttpClient){}
    getdata(){
        return this.http.get("https://jsonplaceholder.typicode.com/posts")
    }
   // sessionStorage.setItem('isUserLogin',this.isUserLogin)

ngOnInit(): void {
    
}
isUserAuthenticated(username:any,password:any){

    this.isUserLogin=username===this.username&&password===this.password
    localStorage.setItem("isUserValid",this.isUserLogin?'true':'false')
//     if(this.username===username&&this.password===password)
// {
//     this.isUserLogin=this.isUserLogin;

// }
}



}


