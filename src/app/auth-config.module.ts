import { NgModule } from '@angular/core';
import { AuthModule, LogLevel } from 'angular-auth-oidc-client';

@NgModule({
  imports: [
    AuthModule.forRoot({
      config: {
        authority: 'https://login.microsoftonline.com/4de6a784-e874-4f76-bbbe-a3382e04ec29/v2.0',
        authWellknownEndpointUrl: 'https://login.microsoftonline.com/4de6a784-e874-4f76-bbbe-a3382e04ec29/v2.0',
        redirectUrl: window.location.origin,
        clientId: 'c8f4ad09-0a9d-4d29-b1c6-2c1176d9025d',
        scope: 'api://5d7e7fa0-2c7a-42f4-b5b8-887e00ae980a/.default openid offline_access ',
        responseType: 'code',
        silentRenew: false,
        maxIdTokenIatOffsetAllowedInSeconds: 600,
        issValidationOff: true,
        autoUserInfo: false,
        forbiddenRoute: '/forbidden',
        unauthorizedRoute: '/unauthorized',
        secureRoutes:['http://127.0.0.1:5000/random/1'],
        // silentRenewUrl: window.location.origin + '/silent-renew.html',
        useRefreshToken: false,
        logLevel: LogLevel.Debug,
        customParamsAuthRequest: {
          prompt: 'select_account', // login, consent
        },
      },
    }),
  ],
  exports: [AuthModule],
})
export class AuthConfigModule {}
