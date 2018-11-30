
import apikeys from './firebase-config';

export const environment = {
  production: true,
  firebase: {
    apiKey: apikeys.firebase_apiKey,
    authDomain: apikeys.firebase_authDomain,
    databaseURL: apikeys.firebase_databaseURL,
    projectId: apikeys.firebase_projectId,
    storageBucket: apikeys.firebase_storageBucket,
    messagingSenderId: apikeys.firebase_messagingSenderId
  }
};
