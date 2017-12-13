import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LessonPage } from '../lesson/lesson';
import { SettingsPage } from '../settings/settings';


@Component({
  selector: 'page-learn',
  templateUrl: 'learn.html'
})
export class LearnPage {
  items: any[];
  settingsPage = SettingsPage;
  lessonPage = LessonPage;

  constructor(public navCtrl: NavController) {

  }
}
