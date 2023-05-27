
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";

export class auth_guard implements CanActivate{
   constructor(private route:Router){}
 canActivate(
    route:ActivatedRouteSnapshot,
    state:RouterStateSnapshot):boolean{
        let token=localStorage.getItem('isUserValid')
        if(token){
            this.route.navigate(['home'])
            return true;
        }
        else{
            return false;
        }
       // return true;
    }
    
 }
