// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  //apiUrl: 'http://localhost:3000/api/frontend/',
  apiUrl: 'https://077952915e36.ngrok.io/api/frontend/',
  //apiVerifyCaptcha:'http://localhost:3000/api/verifycaptcha/',
  apiVerifyCaptcha:'https://077952915e36.ngrok.io/api/verifycaptcha/',
  secretkeyCaptcha:'6LfWjuwUAAAAANPxLd6jU3ni6gnqg9dAaRRRPQJ-'
  
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
