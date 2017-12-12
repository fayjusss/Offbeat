import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LearnPage } from '../pages/learn/learn';
import { LessonPage } from '../pages/lesson/lesson';
import { MockupGamePage } from '../pages/mockup-game/mockup-game';
import { MultiplayerGameMockupPage } from '../pages/multiplayer-game-mockup/multiplayer-game-mockup';
import { SettingsPage } from '../pages/settings/settings';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
