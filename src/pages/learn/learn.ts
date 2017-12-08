import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-learn',
  templateUrl: 'learn.html'
})
export class LearnPage {
  items: any[];

  constructor(public navCtrl: NavController) {

  }

}
