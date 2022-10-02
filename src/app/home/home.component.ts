import { Component, OnInit } from '@angular/core';
import { OidcSecurityService, UserDataResult } from 'angular-auth-oidc-client';
import { Observable } from 'rxjs';
import { ResourceService } from '../shared/resource.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
})
export class HomeComponent implements OnInit {
  userData$!: Observable<UserDataResult>;
  isAuthenticated = false;
  result$: string = '';

  constructor(public oidcSecurityService: OidcSecurityService, public service: ResourceService) {}

  ngOnInit() {
    this.oidcSecurityService.isAuthenticated$.subscribe(({ isAuthenticated }) => {
      this.isAuthenticated = isAuthenticated;
      console.warn('authenticated: ', isAuthenticated);
    });
    this.userData$ = this.oidcSecurityService.userData$;   
  }

  getResource(){
    this.service.getCafeById(1).subscribe(data => {
      this.result$ = JSON.parse(JSON.stringify(data));
    });
  }
}
