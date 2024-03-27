import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom(
      provideFirebaseApp(() =>
        initializeApp({
          projectId: "angular-firebase-app-8f8de",
          appId: "1:363108480765:web:1b828bd7c89190a822b094",
          storageBucket: "angular-firebase-app-8f8de.appspot.com",
          apiKey: "AIzaSyDCID0WA5SzJXjRWsFv4Qn7p8gcLpZHdPE",
          authDomain: "angular-firebase-app-8f8de.firebaseapp.com",
          messagingSenderId: "363108480765"
        })
      )
    ),
    importProvidersFrom(provideAuth(() => getAuth())),
  ],
};