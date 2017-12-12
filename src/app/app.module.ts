import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { GamesPage } from '../pages/games/games';
import { LearnPage } from '../pages/learn/learn';
import { LessonPage } from '../pages/lesson/lesson';
import { MockupGamePage } from '../pages/mockup-game/mockup-game';
import { MultiplayerGameMockupPage } from '../pages/multiplayer-game-mockup/multiplayer-game-mockup';
import { SettingsPage } from '../pages/settings/settings';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    GamesPage,
    LearnPage,
    LessonPage,
    MockupGamePage,
    MultiplayerGameMockupPage,
    SettingsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    GamesPage,
    LearnPage,
    LessonPage,
    MockupGamePage,
    MultiplayerGameMockupPage,
    SettingsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
