import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GamesPage } from '../games/games';
import { LearnPage } from '../learn/learn';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items: any[];
  gamesPage = GamesPage;
  nav: null

  constructor(public navCtrl: NavController) {
    this.nav = navCtrl

  }

  openLearnPage() {
  this.nav.push(LearnPage)
  }
}
