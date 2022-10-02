import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import {OidcSecurityService} from 'angular-auth-oidc-client'
import { Observable, of } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  token?: string;
  headers = new HttpHeaders();
  constructor(public oidcSecurityService: OidcSecurityService) 
  {
    this.oidcSecurityService.getAccessToken().subscribe(data => {
        this.token = data;
        console.log(data)
    });
    this.headers.set('Authorization', `Bearer ${this.token}`)
  }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    request = request.clone({
      //headers: this.headers.set('Authorization', `Bearer ${this.token}`),      
      setHeaders: {  
        Authorization: `Bearer ${this.token}`
      }
    });
    return next.handle(request);
  }
}