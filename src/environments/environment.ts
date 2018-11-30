// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import apikeys from './firebase-config';
  
export const environment = {
  production: false,
  firebase: {
    apiKey: apikeys.firebase_apiKey,
    authDomain: apikeys.firebase_authDomain,
    databaseURL: apikeys.firebase_databaseURL,
    projectId: apikeys.firebase_projectId,
    storageBucket: apikeys.firebase_storageBucket,
    messagingSenderId: apikeys.firebase_messagingSenderId
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
