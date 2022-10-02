import { NgModule } from '@angular/core';
import { AuthModule } from 'angular-auth-oidc-client';


@NgModule({
    imports: [AuthModule.forRoot({
        config: {
              authority: 'https://login.microsoftonline.com/4de6a784-e874-4f76-bbbe-a3382e04ec29',
              redirectUrl: 'https://127.0.0.1:3000/',
              postLogoutRedirectUri: 'https://127.0.0.1:3000/',
              clientId: 'c8f4ad09-0a9d-4d29-b1c6-2c1176d9025d',
              scope: 'api://5d7e7fa0-2c7a-42f4-b5b8-887e00ae980a/Task.Read openid', // 'openid profile offline_access ' + your scopes
              responseType: 'code',
              silentRenew: false,
              renewTimeBeforeTokenExpiresInSeconds: 10,
        }
      })],
    exports: [AuthModule],
})
export class AuthConfigModule {}
