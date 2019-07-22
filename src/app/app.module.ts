import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

//import firebase
import * as firebase from 'firebase'

//
var firebaseConfig = {
  apiKey: "AIzaSyDFUVb6fFJDgnmUKSi4cAWeAuKtLkn9WmE",
  authDomain: "firedb-165e3.firebaseapp.com",
  databaseURL: "https://firedb-165e3.firebaseio.com",
  projectId: "firedb-165e3",
  storageBucket: "",
  messagingSenderId: "292341783819",
  appId: "1:292341783819:web:85e4e530fda477d3"
};
//initialize firebase
firebase.initializeApp(firebaseConfig)

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
