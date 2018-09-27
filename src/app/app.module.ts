import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { UserlistPage } from '../pages/userlist/userlist';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HttpClientModule } from '@angular/common/http';
import { WebRestServiceProvider } from '../providers/web-rest-service/web-rest-service';
import { CapitalizePipe } from '../pipes/Capitalize/Capitalize';





@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    UserlistPage,CapitalizePipe
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    UserlistPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    WebRestServiceProvider
  ]
})                                                                                                    
export class AppModule {}
