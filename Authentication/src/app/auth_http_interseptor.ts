import {HttpClient, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http'

import { Observable } from 'rxjs';
export class auth_http_interseptor implements HttpInterceptor{

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
          
        console.log(req);
        const headers=new HttpHeaders({
            Authorization:'header token 123',
            'Content-Type':'application/json',
        });
        let request=req.clone({headers});
        console.log(request);
        // throw new Error('Method not implemented.');
        return next.handle(request);
    }
    

}