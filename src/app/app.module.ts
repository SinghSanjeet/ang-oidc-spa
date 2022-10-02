import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { routing } from './app.routes';
import { AuthConfigModule } from './auth-config.module';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { HomeComponent } from './home/home.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { ProtectedComponent } from './protected/protected.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { ResourceService } from './shared/resource.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './shared/token.interceptor';
import { OidcSecurityService } from 'angular-auth-oidc-client';

@NgModule({
  declarations: [AppComponent, NavMenuComponent, HomeComponent, ForbiddenComponent, UnauthorizedComponent, ProtectedComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule, routing, AuthConfigModule],
  providers: [ResourceService,
              OidcSecurityService,              
             {provide: HTTP_INTERCEPTORS,
             useClass: TokenInterceptor, multi: true}
            ],
  bootstrap: [AppComponent],
})
export class AppModule {}
