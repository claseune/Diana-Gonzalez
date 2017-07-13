import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {Geolocation} from '@ionic-native/geolocation';
import {GoogleMaps} from '@ionic-native/google-maps';

import * as firebase from 'firebase';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database'
import { AngularFireAuthModule } from 'angularfire2/auth';
 

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {FormPage} from '../pages/form/form';
import {LisPage} from '../pages/lis/lis';
import {GestosPage} from '../pages/gestos/gestos';
import {LoginPage} from '../pages/login/login';
import {RegistroPage} from '../pages/registro/registro';
import {EditarPage} from '../pages/editar/editar';
import {FbPage} from '../pages/fb/fb';
import {GpsPage} from '../pages/gps/gps';

export const config = {
   apiKey: "AIzaSyAimxoz7NoYEQY5akjuxlQd9CFiW4rWQgo",
    authDomain: "portafolio-1f0e5.firebaseapp.com",
    databaseURL: "https://portafolio-1f0e5.firebaseio.com",
    projectId: "portafolio-1f0e5",
    storageBucket: "portafolio-1f0e5.appspot.com",
    messagingSenderId: "378021282157"
  };
  firebase.initializeApp(config);


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FormPage,
    LisPage,
    FbPage,
    EditarPage,
    RegistroPage,
    LoginPage,
    GestosPage,
    GpsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
     AngularFireDatabaseModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FormPage,
    LisPage,
    FbPage,
    EditarPage,
    RegistroPage,
    LoginPage,
    GestosPage,
    GpsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    GoogleMaps,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
