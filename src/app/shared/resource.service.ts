import { Injectable } from '@angular/core';
import {OidcSecurityService} from 'angular-auth-oidc-client'
import { HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
  })
export class ResourceService {
   token?: string;
   constructor(public oidcSecurityService: OidcSecurityService, private http: HttpClient)
    {
        this.oidcSecurityService.getAccessToken().subscribe(data=>{
            this.token = data
        });
        console.log(this.token)
     }
   

    httpOptions = {
        headers: new HttpHeaders({
            Authorization: 'Bearer ' + this.token,
        }),
    };

    getCafeById(id?: number): Observable<any> {        
        return this.http.get<any>('https://localhost:7190/api/Home/GetData');
    }


}