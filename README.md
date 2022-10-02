# Angular-Oidc-Spa

This project is an application skeleton for a typical Angular web app. You can use it to quickly bootstrap your angular web-application projects and dev environment for any projects where user authentication is required.

The seed contains a sample Angular application and is preconfigured to install the Angular framework and a bunch of development and testing tools for instant web development gratification.

The seed app does the following:
1. Provides a skeleton of a web application.
2. Secure your Angular app using the latest standards for OpenID Connect & OAuth2.
3. Provides route guard.
 

 # configuration: auth-config.module.ts
 ---------------------------------
| Parameter | Mandatory/Optional |    Description | Allowed / Existing Values  |
|-----------|--------------------|----------------|----------------------------|
|authority | Mandatory | This is the url to the Security Token Service (STS). The authority issues tokens. | https://login.microsoftonline.com/<tenantId>/v2.0|
| redirectUrl | Mandatory | This is the redirect_url which was configured on the Security Token Service(STS). After athorization the user is redirected to this url. | http://127.0.0.1:port/ |
| clientId | Mandatory | It holds the cientId of the registered app. The id token MUST be rejected if the id token does not list the Client as a valid audience, or if it contains additional audiences not trusted by the Client. | c8f4ad09-xxxx |
| scope | Mandatory | This contains the scopes that are requested from the server for this client, defined as a space-delimited list. This MUST match the STS server configuration. | api://5d7e7fa0-2c7a-42f4-b5b8-xxxx/.default openid offline_access |
| responseType | Mandatory | The name of the flow which to be configured. Valid options are code, id_token token, or id_token. | code |
| silentRenew | Optional | Indicates that the library should renew the client's tokens after the token_id expires. It can be configured to use iframes or refresh tokens. | true/false |
| authWellknownEndpointUrl | Optional | A different well-known endpoint can be defined instead of the authority domain with the standard well-known endpoints postfix. This is only required if the well-known endpoint URL is not implemented in a standard way on the Security Token Service (STS). | https://login.microsoftonline.com/<tenantId>/v2.0 | 
| forbiddenRoute | Optional | The Angular route to redirect the client to when the server returns an HTTP 403 response. | /forbidden |
| unauthorizedRoute | Optional | The Angular route to redirect the client to when the server returns an HTTP 401 response. | /unauthorized |
| secureRoutes | Optional | An array of secure urls to which the token should be sent if the interceptor is added to the HTTP_INTERCEPTORS. | http://127.0.0.1:5000/random/1 |
------------------------


## Development server

Run `ng serve --port 3000` for a dev server. Navigate to `http://localhost:3000/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Executing the angular app:

1. Provide the required credentials under the config file(auth-config.modules.ts).
2. Build the application `ng build`
3. Run the application `ng server --port 3000`. The domain should be the same as the redirect_url domain.
4. Once the app is up, the user should be prompted to the sts login window for credentials.
5. After the credential is provided, the user should be authorized and the identity server should return with the 
auth code which is then used to make the token request.
6. After the successful token request, the token metadata is stored in the session along with the token.
