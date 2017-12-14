import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GamesPage } from '../games/games';
import { LearnPage } from '../learn/learn';
import { SettingsPage } from '../settings/settings';
import { ProfilePage } from '../profile/profile';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items: any[];
  gamesPage = GamesPage;
  learnPage = LearnPage;
  settingsPage = SettingsPage;
  profilePage = ProfilePage;

  constructor(public navCtrl: NavController) {

  }
}
