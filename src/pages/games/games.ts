import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MockupGamePage } from '../mockup-game/mockup-game';
import { MultiplayerOpponentPage } from '..//multiplayer-opponent/multiplayer-opponent';



/**
 * Generated class for the GamesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-games',
  templateUrl: 'games.html',
})
export class GamesPage {

  mockupGamePage = MockupGamePage;
  multiplayerOpponentPage = MultiplayerOpponentPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GamesPage');
  }

}
