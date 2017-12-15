import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MultiplayerGameMockupPage } from '../multiplayer-game-mockup/multiplayer-game-mockup';

/**
 * Generated class for the MultiplayerOpponentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-multiplayer-opponent',
  templateUrl: 'multiplayer-opponent.html',
})
export class MultiplayerOpponentPage {

  multiplayerGameMockupPage = MultiplayerGameMockupPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MultiplayerOpponentPage');
  }

}
