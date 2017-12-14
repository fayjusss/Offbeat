import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SinglePlayerGameOverPage } from '../single-player-game-over/single-player-game-over';


/**
 * Generated class for the MockupGamePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mockup-game',
  templateUrl: 'mockup-game.html',
})
export class MockupGamePage {

  singlePlayerGameOverPage = SinglePlayerGameOverPage

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MockupGamePage');
  }

}
